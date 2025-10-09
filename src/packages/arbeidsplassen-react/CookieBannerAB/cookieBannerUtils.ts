import {
  CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_MAX_AGE_DAYS,
  type ConsentCookie as V2Consent,
  readConsent,
  writeConsent,
  readConsentFromCookieHeader,
  makeSetCookieHeader,
  CONSENT_VERSION,
} from "./consentCookie";

/** UI-vendt (legacy-ish) shape – nå MED surveys */
export type ConsentData = {
  consent: { analytics: boolean; surveys: boolean };
  userActionTaken: boolean;
  meta: {
    createdAt: string; // ISO
    updatedAt: string; // ISO
    version: number;
  };
};

export type ConsentValues = {
  analyticsConsent: boolean;
  surveysConsent: boolean;
};

/** --- Konstanter --- */
const consentCookieName = CONSENT_COOKIE_NAME;
const CURRENT_VERSION = CONSENT_VERSION;

/** --- Mapper mellom V2 og UI-shape --- */
const v2ToLegacy = (v2: V2Consent): ConsentData => ({
  consent: { analytics: v2.consent.analytics, surveys: v2.consent.surveys },
  userActionTaken: v2.state.userActionTaken,
  meta: {
    createdAt: v2.timestamp.createdAt,
    updatedAt: v2.timestamp.updatedAt,
    version: v2.version,
  },
});

const legacyToV2 = (legacy: ConsentData): V2Consent => ({
  version: 2,
  timestamp: {
    createdAt: legacy.meta.createdAt,
    updatedAt: legacy.meta.updatedAt,
  },
  consent: {
    analytics: legacy.consent.analytics,
    surveys: legacy.consent.surveys,
  },
  state: { userActionTaken: legacy.userActionTaken },
});

const isObject = (v: unknown): v is Readonly<Record<string, unknown>> =>
  typeof v === "object" && v !== null;
const isBoolean = (v: unknown): v is boolean => typeof v === "boolean";
const isNumber = (v: unknown): v is number =>
  typeof v === "number" && Number.isFinite(v);
const isValidISOString = (s: string): boolean => {
  const d = new Date(s);
  return Number.isFinite(d.getTime()) && d.toISOString() === s;
};

/**
 * Validerer UI-shape. `surveys` kan mangle i gamle cookies – da tolkes den som false.
 */
function validateConsentDataLoose(input: unknown): input is ConsentData {
  if (!isObject(input)) return false;
  const { consent, userActionTaken, meta } = input as Record<string, unknown>;
  if (!isObject(consent)) return false;

  const analyticsOk = isBoolean((consent as Record<string, unknown>).analytics);
  const surveysRaw = (consent as Record<string, unknown>).surveys;
  const surveysOk = typeof surveysRaw === "undefined" || isBoolean(surveysRaw);
  if (!analyticsOk || !surveysOk) return false;

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

function normalizeLegacy(input: ConsentData): ConsentData {
  return {
    consent: {
      analytics: input.consent.analytics,
      surveys: input.consent.surveys ?? false,
    },
    userActionTaken: input.userActionTaken,
    meta: input.meta,
  };
}

function assertConsentData(input: unknown): asserts input is ConsentData {
  if (!validateConsentDataLoose(input)) {
    throw new Error("Invalid ConsentData payload");
  }
}

const makeDefaultConsentData = (
  nowISO: string = new Date().toISOString()
): ConsentData => ({
  consent: { analytics: false, surveys: false },
  userActionTaken: false,
  meta: { createdAt: nowISO, updatedAt: nowISO, version: CURRENT_VERSION },
});

function parseLegacyCookieValue(raw: string): ConsentData | null {
  try {
    const decoded = decodeURIComponent(raw);
    const parsed = JSON.parse(decoded) as unknown;
    if (!validateConsentDataLoose(parsed)) return null;
    return normalizeLegacy(parsed);
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

/** Skriver UI-shape (legacy) til cookie, men via V2 motor. */
export function setCookie(
  value: ConsentData,
  days: number = CONSENT_COOKIE_MAX_AGE_DAYS
): void {
  if (typeof document === "undefined") return;
  assertConsentData(value);
  const normalized = normalizeLegacy(value);
  writeConsent(legacyToV2(normalized), days);
}

/**
 * Leser cookie. Hvis `cookies` (server-header) er gitt, parses den derfra.
 * Returnerer UI-shape; under panseret brukes V2.
 */
export function getCookie(cookies?: string | null): ConsentData | null {
  if (typeof cookies === "string") {
    // V2 først
    const v2 = readConsentFromCookieHeader(cookies);
    if (v2) return v2ToLegacy(v2);

    // Fallback: gammel legacy i header
    const raw = readCookieFromString(cookies, consentCookieName);
    if (raw) {
      const legacy = parseLegacyCookieValue(raw);
      if (legacy) return legacy;
    }
    return null;
  }

  // Klient
  const v2 = readConsent();
  return v2 ? v2ToLegacy(v2) : null;
}

export function getUserActionTakenValue(cookies?: string | null): boolean {
  const existing = getCookie(cookies);
  return existing?.userActionTaken ?? false;
}

export function getConsentValues(cookies?: string | null): ConsentValues {
  const existing = getCookie(cookies) ?? makeDefaultConsentData();
  return {
    analyticsConsent: existing.consent.analytics,
    surveysConsent: existing.consent.surveys,
  };
}
export const acceptAllOptionalConsents = (accepted: boolean): ConsentData =>
  updateConsent({
    consent: { analytics: accepted, surveys: accepted },
    userActionTaken: true,
  });

/** Oppdater deler av consent (UI-shape) – skrives via V2. */
export function updateConsent(
  partial: {
    consent?: Partial<ConsentData["consent"]>;
    userActionTaken?: boolean;
  },
  cookies?: string | null
): ConsentData {
  const currentLegacy = getCookie(cookies) ?? makeDefaultConsentData();
  const nowISO = new Date().toISOString();

  const nextLegacy: ConsentData = normalizeLegacy({
    consent: {
      analytics: partial.consent?.analytics ?? currentLegacy.consent.analytics,
      surveys: partial.consent?.surveys ?? currentLegacy.consent.surveys,
    },
    userActionTaken: partial.userActionTaken ?? currentLegacy.userActionTaken,
    meta: {
      createdAt: currentLegacy.meta.createdAt,
      updatedAt: nowISO,
      version: currentLegacy.meta.version ?? CURRENT_VERSION,
    },
  });

  writeConsent(legacyToV2(nextLegacy)); // skriver via ny motor
  return nextLegacy;
}

/** Hard reset (UI-shape), skriver via V2. */
export function resetConsent(): ConsentData {
  const now = new Date().toISOString();
  const freshV2: V2Consent = {
    version: 2,
    timestamp: { createdAt: now, updatedAt: now },
    consent: { analytics: false, surveys: false },
    state: { userActionTaken: false },
  };
  writeConsent(freshV2);
  return v2ToLegacy(freshV2);
}

/** Set-Cookie for server-respons */
export const makeServerSetCookieHeader = (legacy: ConsentData): string => {
  assertConsentData(legacy);
  const normalized = normalizeLegacy(legacy);
  return makeSetCookieHeader(legacyToV2(normalized));
};
