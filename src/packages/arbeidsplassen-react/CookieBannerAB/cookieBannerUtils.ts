import {
  CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_MAX_AGE_DAYS,
  type ConsentCookie as V1Consent,
  readConsent,
  writeConsent,
  readConsentFromCookieHeader,
  makeSetCookieHeader,
} from "./consentCookie";

export type ConsentData = {
  consent: { analytics: boolean };
  userActionTaken: boolean;
  meta: {
    createdAt: string; // ISO
    updatedAt: string; // ISO
    version: number;
  };
};

export type ConsentValues = {
  analyticsConsent: boolean;
};

/** --- Konstanter --- */
const consentCookieName = CONSENT_COOKIE_NAME;
const CURRENT_VERSION = 1 as const;

/** --- Mapper mellom legacy og V1 --- */
const v1ToLegacy = (v1: V1Consent): ConsentData => ({
  consent: { analytics: v1.consent.analytics },
  userActionTaken: v1.state.userActionTaken,
  meta: {
    createdAt: v1.timestamp.createdAt,
    updatedAt: v1.timestamp.updatedAt,
    version: v1.version,
  },
});

const legacyToV1 = (legacy: ConsentData): V1Consent => ({
  version: 1,
  timestamp: {
    createdAt: legacy.meta.createdAt,
    updatedAt: legacy.meta.updatedAt,
  },
  consent: { analytics: legacy.consent.analytics },
  state: { userActionTaken: legacy.userActionTaken },
});

/** --- Små helpers (kun for legacy validering / parsing) --- */
const isObject = (v: unknown): v is Readonly<Record<string, unknown>> =>
  typeof v === "object" && v !== null;
const isBoolean = (v: unknown): v is boolean => typeof v === "boolean";
const isNumber = (v: unknown): v is number =>
  typeof v === "number" && Number.isFinite(v);
const isValidISOString = (s: string): boolean => {
  const d = new Date(s);
  return Number.isFinite(d.getTime()) && d.toISOString() === s;
};

function validateConsentData(input: unknown): input is ConsentData {
  if (!isObject(input)) return false;
  const { consent, userActionTaken, meta } = input as Record<string, unknown>;
  if (
    !isObject(consent) ||
    !isBoolean((consent as Record<string, unknown>).analytics)
  )
    return false;
  if (!isBoolean(userActionTaken)) return false;
  if (!isObject(meta)) return false;

  const m = meta as Record<string, unknown>;
  if (typeof m.createdAt !== "string" || !isValidISOString(m.createdAt))
    return false;
  if (typeof m.updatedAt !== "string" || !isValidISOString(m.updatedAt))
    return false;
  if (
    !isNumber(m.version) ||
    !Number.isInteger(m.version) ||
    (m.version as number) < 0
  )
    return false;
  return true;
}

function assertConsentData(input: unknown): asserts input is ConsentData {
  if (!validateConsentData(input))
    throw new Error("Invalid ConsentData payload");
}

const makeDefaultConsentData = (
  nowISO: string = new Date().toISOString()
): ConsentData => ({
  consent: { analytics: false },
  userActionTaken: false,
  meta: { createdAt: nowISO, updatedAt: nowISO, version: CURRENT_VERSION },
});

function parseLegacyCookieValue(raw: string): ConsentData | null {
  try {
    const decoded = decodeURIComponent(raw);
    const parsed = JSON.parse(decoded) as unknown;
    return validateConsentData(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function readCookieFromString(allCookies: string, name: string): string | null {
  const parts = allCookies.split(";").map((c) => c.trim());
  for (const part of parts) {
    if (part.startsWith(`${name}=`)) return part.slice(name.length + 1);
  }
  return null;
}

/** Skriver legacy-format ut til document.cookie (men bruker V1 internt). */
export function setCookie(
  value: ConsentData,
  days: number = CONSENT_COOKIE_MAX_AGE_DAYS
): void {
  if (typeof document === "undefined") return;
  assertConsentData(value);
  writeConsent(legacyToV1(value), days); // pass-through av days
}

/**
 * Leser cookie. Hvis `cookies` (server-header) er gitt, parses den derfra.
 * Returnerer legacy-objekt, men henter fra V1 hvis mulig.
 */
export function getCookie(cookies?: string | null): ConsentData | null {
  if (typeof cookies === "string") {
    // Prøv V1 først
    const v1 = readConsentFromCookieHeader(cookies);
    if (v1) return v1ToLegacy(v1);

    // Fallback: legacy i header
    const raw = readCookieFromString(cookies, consentCookieName);
    if (raw) {
      const legacy = parseLegacyCookieValue(raw);
      if (legacy) return legacy;
    }
    return null;
  }

  // Klient
  const v1 = readConsent();
  return v1 ? v1ToLegacy(v1) : null;
}

export function getUserActionTakenValue(cookies?: string | null): boolean {
  const existing = getCookie(cookies);
  return existing?.userActionTaken ?? false;
}

export function getConsentValues(cookies?: string | null): ConsentValues {
  const existing = getCookie(cookies);
  return { analyticsConsent: existing?.consent.analytics ?? false };
}

/** Oppdater deler av consent (legacy signatur) – skrives via V1. */
export function updateConsent(
  partial: Partial<Pick<ConsentData, "consent" | "userActionTaken">>,
  cookies?: string | null
): ConsentData {
  const currentLegacy = getCookie(cookies) ?? makeDefaultConsentData();
  const nowISO = new Date().toISOString();

  const nextLegacy: ConsentData = {
    consent: {
      analytics: partial.consent?.analytics ?? currentLegacy.consent.analytics,
    },
    userActionTaken: partial.userActionTaken ?? currentLegacy.userActionTaken,
    meta: {
      createdAt: currentLegacy.meta.createdAt,
      updatedAt: nowISO,
      version: currentLegacy.meta.version ?? CURRENT_VERSION,
    },
  };

  writeConsent(legacyToV1(nextLegacy)); // skriver via ny motor
  return nextLegacy;
}

/** Hard reset (legacy return), men skriver via V1. */
export function resetConsent(): ConsentData {
  const now = new Date().toISOString();
  const freshV1: V1Consent = {
    version: 1,
    timestamp: { createdAt: now, updatedAt: now },
    consent: { analytics: false },
    state: { userActionTaken: false },
  };
  writeConsent(freshV1);
  return v1ToLegacy(freshV1);
}

/** Set-Cookie for server-respons */
export const makeServerSetCookieHeader = (legacy: ConsentData): string => {
  assertConsentData(legacy);
  return makeSetCookieHeader(legacyToV1(legacy));
};
