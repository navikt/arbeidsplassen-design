import { z } from "zod";
import { writeBrowserCookie } from "./cookieWrite";

/** ---------- Konstanter ---------- */
export const CONSENT_COOKIE_NAME = "arbeidsplassen-consent";
export const CONSENT_COOKIE_MAX_AGE_DAYS = 90 as const;
export const CONSENT_VERSION = 2 as const;

/** ---------- Typer ---------- */
/** V2 (gjeldende) */
export type ConsentV2 = {
  version: 2;
  timestamp: { createdAt: string; updatedAt: string }; // ISO 8601
  consent: {
    analytics: boolean;
    surveys: boolean; // NY: Skyra
  };
  state: { userActionTaken: boolean };
};

/** V1 (for migrering) */
export type ConsentV1 = {
  version: 1;
  timestamp: { createdAt: string; updatedAt: string };
  consent: { analytics: boolean };
  state: { userActionTaken: boolean };
};

/** Legacy (for migrering) – feltet `surveys` kan mangle */
export type LegacyConsent = {
  consent: { analytics: boolean; surveys?: boolean };
  userActionTaken: boolean;
  meta: { createdAt: string; updatedAt: string; version: number };
};

/** ---------- Zod schema ---------- */
const isoDatetime = z
  .string()
  .refine((s) => !Number.isNaN(Date.parse(s)), { message: "Invalid ISO date" });

const ConsentV2Schema = z.object({
  version: z.literal(2),
  timestamp: z.object({
    createdAt: isoDatetime,
    updatedAt: isoDatetime,
  }),
  consent: z.object({
    analytics: z.boolean(),
    surveys: z.boolean(),
  }),
  state: z.object({
    userActionTaken: z.boolean(),
  }),
});

const ConsentV1Schema = z.object({
  version: z.literal(1),
  timestamp: z.object({
    createdAt: isoDatetime,
    updatedAt: isoDatetime,
  }),
  consent: z.object({
    analytics: z.boolean(),
  }),
  state: z.object({
    userActionTaken: z.boolean(),
  }),
});

export type ConsentCookie = z.infer<typeof ConsentV2Schema>;

/** ---------- Helpers: tid & cookie ---------- */
const nowIso = (): string => new Date().toISOString();

const tryJsonParse = (raw: string): unknown => {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const readRawCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie
    .split(";")
    .map((v) => v.trim())
    .find((v) => v.startsWith(`${name}=`));
  if (!match) return undefined;
  const value = match.substring(name.length + 1);
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

/** ---------- Type guards for migrering ---------- */
const isLegacy = (u: unknown): u is LegacyConsent => {
  if (!u || typeof u !== "object") return false;
  const o = u as Record<string, unknown>;
  const consent = o["consent"];
  const uat = o["userActionTaken"];
  const meta = o["meta"];
  const hasConsent =
    !!consent &&
    typeof (consent as Record<string, unknown>).analytics === "boolean";
  const hasMeta =
    !!meta &&
    typeof (meta as Record<string, unknown>).createdAt === "string" &&
    typeof (meta as Record<string, unknown>).updatedAt === "string";
  return hasConsent && typeof uat === "boolean" && hasMeta;
};

/** ---------- Migreringer ---------- */
const migrateV1ToV2 = (v1: ConsentV1): ConsentV2 => ({
  version: 2,
  timestamp: {
    createdAt: v1.timestamp.createdAt,
    updatedAt: v1.timestamp.updatedAt,
  },
  consent: {
    analytics: v1.consent.analytics,
    surveys: false, // default når V1 ikke kjenner Skyra
  },
  state: { userActionTaken: v1.state.userActionTaken },
});

const migrateLegacyToV2 = (legacy: LegacyConsent): ConsentV2 => ({
  version: 2,
  timestamp: {
    createdAt: legacy.meta.createdAt,
    updatedAt: legacy.meta.updatedAt,
  },
  consent: {
    analytics: legacy.consent.analytics,
    surveys: legacy.consent.surveys ?? false,
  },
  state: { userActionTaken: legacy.userActionTaken },
});

/** ---------- Parse + normalisering ---------- */
export const parseConsentCookie = (
  raw: string | undefined
): ConsentCookie | null => {
  if (!raw) return null;
  const data = tryJsonParse(raw);
  if (!data) return null;

  const v2 = ConsentV2Schema.safeParse(data);
  if (v2.success) return v2.data;

  const v1 = ConsentV1Schema.safeParse(data);
  if (v1.success) {
    const migrated = migrateV1ToV2(v1.data);
    const validated = ConsentV2Schema.safeParse(migrated);
    return validated.success ? validated.data : null;
  }

  if (isLegacy(data)) {
    const migrated = migrateLegacyToV2(data);
    const validated = ConsentV2Schema.safeParse(migrated);
    return validated.success ? validated.data : null;
  }

  return null;
};

/** ---------- Public API ---------- */

/** Leser og validerer samtykke-cookien (alltid V2 ut). */
export const readConsent = (): ConsentCookie | null => {
  const raw = readRawCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;

  // Forsøk V2 / V1 / Legacy i ett
  const parsed = parseConsentCookie(raw);
  if (parsed) {
    // Hvis innholdet ikke var V2 opprinnelig: skriv tilbake som V2 for å normalisere
    writeConsent(parsed);
    return parsed;
  }

  return null;
};

/** Skriver komplett ConsentV2 til cookie (overstyrer hele objektet). */
export const writeConsent = (
  consent: ConsentCookie,
  days: number = CONSENT_COOKIE_MAX_AGE_DAYS
): void => {
  const payload = JSON.stringify(consent);
  writeBrowserCookie({
    name: CONSENT_COOKIE_NAME,
    value: payload,
    days,
    path: "/",
    sameSite: "Lax",
  });
};

/** Upsert – oppdaterer felt og `updatedAt` (bevarer `createdAt`). */
export const upsertConsent = (
  updater: (prev: ConsentCookie | null) => ConsentCookie
): ConsentCookie => {
  const prev = readConsent();
  const next = updater(prev);
  const createdAt = prev?.timestamp.createdAt ?? nowIso();

  const normalized: ConsentCookie = {
    ...next,
    version: CONSENT_VERSION,
    timestamp: { createdAt, updatedAt: nowIso() },
    consent: {
      analytics: next.consent.analytics,
      surveys: next.consent.surveys,
    },
    state: { userActionTaken: next.state.userActionTaken },
  };

  writeConsent(normalized);
  return normalized;
};

/** Convenience: toggle/set analytics. */
export const setAnalyticsConsent = (enabled: boolean): ConsentCookie =>
  upsertConsent((prev) => ({
    version: CONSENT_VERSION,
    timestamp: {
      createdAt: prev?.timestamp.createdAt ?? nowIso(),
      updatedAt: nowIso(),
    },
    consent: {
      analytics: enabled,
      surveys: prev?.consent.surveys ?? false,
    },
    state: { userActionTaken: true },
  }));

/** NY: toggle/set surveys (Skyra). */
export const setSurveysConsent = (enabled: boolean): ConsentCookie =>
  upsertConsent((prev) => ({
    version: CONSENT_VERSION,
    timestamp: {
      createdAt: prev?.timestamp.createdAt ?? nowIso(),
      updatedAt: nowIso(),
    },
    consent: {
      analytics: prev?.consent.analytics ?? false,
      surveys: enabled,
    },
    state: { userActionTaken: true },
  }));

/** Hent nåværende analytics-samtykke (false hvis mangler/ugyldig). */
export const getAnalyticsConsent = (): boolean =>
  readConsent()?.consent.analytics ?? false;

/** Hent nåværende surveys-samtykke (false hvis mangler/ugyldig). */
export const getSurveysConsent = (): boolean =>
  readConsent()?.consent.surveys ?? false;

// --- Server/edge helpers ---
export const readConsentFromCookieHeader = (
  cookieHeader: string | null | undefined
): ConsentCookie | null => {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";").map((c) => c.trim());
  const hit = parts.find((p) => p.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!hit) return null;

  const raw = decodeURIComponent(hit.slice(CONSENT_COOKIE_NAME.length + 1));
  return parseConsentCookie(raw);
};

export const makeSetCookieHeader = (
  consent: ConsentCookie,
  maxAgeDays = CONSENT_COOKIE_MAX_AGE_DAYS,
  opts?: {
    domain?: string;
    sameSite?: "Lax" | "Strict" | "None";
    secure?: boolean;
    isHttps?: boolean;
  }
): string => {
  const sameSite = opts?.sameSite ?? "Lax";
  const isHttps = opts?.isHttps ?? true;
  const mustSecure = sameSite === "None";
  const secureFlag =
    typeof opts?.secure === "boolean"
      ? opts.secure
      : mustSecure
      ? true
      : isHttps;

  const value = encodeURIComponent(JSON.stringify(consent));
  const maxAge = Math.round(maxAgeDays * 86400);
  const expires = new Date(Date.now() + maxAge * 1000).toUTCString();

  const parts = [
    `${CONSENT_COOKIE_NAME}=${value}`,
    `Expires=${expires}`,
    `Max-Age=${maxAge}`,
    `Path=/`,
    `SameSite=${sameSite}`,
  ];
  if (opts?.domain) parts.push(`Domain=${opts.domain}`);
  if (secureFlag) parts.push("Secure");

  return parts.join("; ");
};
