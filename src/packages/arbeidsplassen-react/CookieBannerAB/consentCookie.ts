import { z } from "zod";
import { writeBrowserCookie } from "./cookieWrite";

/** ---------- Konstanter ---------- */
export const CONSENT_COOKIE_NAME = "arbeidsplassen-consent";
export const CONSENT_COOKIE_MAX_AGE_DAYS = 90 as const;

/** ---------- Typer (V1 anbefalt struktur) ---------- */
export type ConsentV1 = {
  version: 1;
  timestamp: {
    createdAt: string; // ISO 8601
    updatedAt: string; // ISO 8601
  };
  consent: {
    analytics: boolean;
  };
  state: {
    userActionTaken: boolean;
  };
};

/** Legacy: nåværende cookie hos dere (for migrering) */
export type LegacyConsent = {
  consent: { analytics: boolean };
  userActionTaken: boolean;
  meta: {
    createdAt: string;
    updatedAt: string;
    version: number;
  };
};

/** ---------- Zod schema ---------- */
const isoDatetime = z
  .string()
  .refine((s) => !Number.isNaN(Date.parse(s)), { message: "Invalid ISO date" });

export const ConsentV1Schema = z.object({
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

export type ConsentCookie = z.infer<typeof ConsentV1Schema>;

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

/** ---------- Migrering fra legacy ---------- */
const isLegacy = (u: unknown): u is LegacyConsent => {
  if (!u || typeof u !== "object") return false;
  const o = u as Record<string, unknown>;
  const consent = o["consent"];
  const uat = o["userActionTaken"];
  const meta = o["meta"];
  return (
    !!consent &&
    typeof (consent as Record<string, unknown>).analytics === "boolean" &&
    typeof uat === "boolean" &&
    !!meta &&
    typeof (meta as Record<string, unknown>).createdAt === "string" &&
    typeof (meta as Record<string, unknown>).updatedAt === "string"
  );
};

export const migrateLegacyToV1 = (u: LegacyConsent): ConsentV1 => ({
  version: 1,
  timestamp: {
    createdAt: u.meta.createdAt,
    updatedAt: u.meta.updatedAt,
  },
  consent: {
    analytics: u.consent.analytics,
  },
  state: {
    userActionTaken: u.userActionTaken,
  },
});

/** ---------- Parse + normalisering ---------- */
export const parseConsentCookie = (
  raw: string | undefined
): ConsentCookie | null => {
  if (!raw) return null;
  const data = tryJsonParse(raw);
  if (!data) return null;

  // Først: forsøk V1
  const v1 = ConsentV1Schema.safeParse(data);
  if (v1.success) return v1.data;

  // Deretter: forsøk legacy -> migrer -> valider
  if (isLegacy(data)) {
    const migrated = migrateLegacyToV1(data);
    const validated = ConsentV1Schema.safeParse(migrated);
    return validated.success ? validated.data : null;
  }

  return null;
};

/** ---------- Public API ---------- */

/** Leser og validerer samtykke-cookien. */
export const readConsent = (): ConsentCookie | null => {
  const raw = readRawCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;

  const parsed = tryJsonParse(raw);

  // V1 direkte?
  const v1 = ConsentV1Schema.safeParse(parsed);
  if (v1.success) return v1.data;

  // Legacy? Migrer → skriv V1 tilbake → returner V1
  if (isLegacy(parsed)) {
    const migrated = migrateLegacyToV1(parsed);
    writeConsent(migrated);
    return migrated;
  }

  return null;
};

/** Skriver en komplett ConsentV1 til cookie (overstyrer hele objektet). */
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

/** Oppretter ny cookie hvis mangler, ellers oppdaterer felt + updatedAt. */
export const upsertConsent = (
  updater: (prev: ConsentCookie | null) => ConsentCookie
): ConsentCookie => {
  const prev = readConsent();
  const next = updater(prev);
  // sørg for å oppdatere updatedAt (men bevar createdAt)
  const createdAt = prev?.timestamp.createdAt ?? nowIso();
  const nextNormalized: ConsentCookie = {
    ...next,
    version: 1,
    timestamp: {
      createdAt,
      updatedAt: nowIso(),
    },
  };
  writeConsent(nextNormalized);
  return nextNormalized;
};

/** Convenience: toggle/set analytics. */
export const setAnalyticsConsent = (enabled: boolean): ConsentCookie => {
  return upsertConsent((prev) => ({
    version: 1,
    timestamp: {
      createdAt: prev?.timestamp.createdAt ?? nowIso(),
      updatedAt: nowIso(),
    },
    consent: {
      analytics: enabled,
    },
    state: {
      userActionTaken: true,
    },
  }));
};

/** Hent nåværende analytics-samtykke (false hvis mangler/ugyldig). */
export const getAnalyticsConsent = (): boolean => {
  const c = readConsent();
  return c?.consent.analytics ?? false;
};

// --- Ekstra helpers for server/edge ---

/** Parse Consent-cookie fra en Cookie-header (server/edge). */
export const readConsentFromCookieHeader = (
  cookieHeader: string | null | undefined
): ConsentCookie | null => {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";").map((c) => c.trim());
  const hit = parts.find((p) => p.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!hit) return null;

  const raw = decodeURIComponent(hit.slice(CONSENT_COOKIE_NAME.length + 1));
  // Prøv V1
  const v1 = parseConsentCookie(raw);
  if (v1) return v1;
  // Prøv legacy → migrer
  const maybeLegacy = tryJsonParse(raw);
  if (isLegacy(maybeLegacy)) {
    const migrated = migrateLegacyToV1(maybeLegacy);
    return migrated; // skriv tilbake i respons med makeSetCookieHeader hvis ønsket
  }
  return null;
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
  const isHttps = opts?.isHttps ?? true; // prod default
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
