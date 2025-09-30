/** --- Types --- */
export type ConsentData = {
    consent: {
        analytics: boolean;
    };
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
const consentCookieName = "arbeidsplassen-consent";
const CURRENT_VERSION = 1 as const;

/** --- Små helpers --- */
const isObject = (v: unknown): v is Readonly<Record<string, unknown>> =>
    typeof v === "object" && v !== null;

const isBoolean = (v: unknown): v is boolean => typeof v === "boolean";
const isNumber = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);

const isValidISOString = (dateString: string): boolean => {
    const d = new Date(dateString);
    return Number.isFinite(d.getTime()) && d.toISOString() === dateString;
};

/** --- Validering --- */
function validateConsentData(input: unknown): input is ConsentData {
    if (!isObject(input)) return false;

    const consent = input.consent;
    const userActionTaken = input.userActionTaken;
    const meta = input.meta;

    if (!isObject(consent)) return false;
    if (!isBoolean(consent.analytics)) return false;

    if (!isBoolean(userActionTaken)) return false;

    if (!isObject(meta)) return false;

    const createdAt = meta.createdAt;
    const updatedAt = meta.updatedAt;
    const version = meta.version;

    if (typeof createdAt !== "string" || !isValidISOString(createdAt)) return false;
    if (typeof updatedAt !== "string" || !isValidISOString(updatedAt)) return false;
    if (!isNumber(version) || !Number.isInteger(version) || version < 0) return false;

    return true;
}

function assertConsentData(input: unknown): asserts input is ConsentData {
    if (!validateConsentData(input)) {
        throw new Error("Invalid ConsentData payload");
    }
}

/** Default-objekt (brukes ved fallback) */
const makeDefaultConsentData = (nowISO: string = new Date().toISOString()): ConsentData => ({
    consent: { analytics: false },
    userActionTaken: false,
    meta: { createdAt: nowISO, updatedAt: nowISO, version: CURRENT_VERSION },
});

/** Parse + valider JSON fra cookie */
function parseConsentCookie(raw: string): ConsentData | null {
    try {
        const decoded = decodeURIComponent(raw);
        const parsed = JSON.parse(decoded) as unknown;
        return validateConsentData(parsed) ? parsed : null;
    } catch {
        return null;
    }
}

/** Henter verdien for gitt cookieName fra en cookie-string */
function readCookieFromString(allCookies: string, name: string): string | null {
    // Cookie-header: "a=1; b=2; c=3"
    const parts = allCookies.split(";").map((c) => c.trim());
    for (const part of parts) {
        if (part.startsWith(`${name}=`)) {
            return part.slice(name.length + 1);
        }
    }
    return null;
}

/** --- Public API --- */

export function setCookie(value: ConsentData, days: number = 90): void {
    if (typeof document === "undefined") return;

    try {
        // Valider før vi skriver
        assertConsentData(value);
        const jsonString = encodeURIComponent(JSON.stringify(value));

        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

        const isProduction = process.env.NODE_ENV === "production";
        const secure = isProduction ? "; Secure" : "";
        const sameSite = "; SameSite=Lax";

        document.cookie = `${consentCookieName}=${jsonString}; expires=${expires.toUTCString()}; path=/${sameSite}${secure}`;
    } catch (e) {
        // Behold tydelig feilmelding uten å bruke console i lib-kode
        const msg = e instanceof Error ? e.message : "Unknown error";
        throw new Error(`Failed to set cookie "${consentCookieName}": ${msg}`);
    }
}

/**
 * Hent cookie. `cookies` kan være en Cookie-header string (server)
 * eller undefined/null (klient -> leser fra document.cookie).
 */
export function getCookie(cookies?: string | null): ConsentData | null {
    const source = (() => {
        if (typeof cookies === "string") return cookies;
        if (typeof document !== "undefined") return document.cookie ?? "";
        return "";
    })();

    if (!source) return null;

    const raw = readCookieFromString(source, consentCookieName);
    if (!raw) return null;

    return parseConsentCookie(raw);
}

/** Hent createdAt eller nåværende tidspunkt som fallback */
export function getCreatedAtValue(cookies?: string | null): string {
    const existing = getCookie(cookies);
    return existing?.meta.createdAt ?? new Date().toISOString();
}

/** Hent userActionTaken, default false */
export function getUserActionTakenValue(cookies?: string | null): boolean {
    const existing = getCookie(cookies);
    return existing?.userActionTaken ?? false;
}

/** Hent kun consent-flaggene i et lite, typed objekt */
export function getConsentValues(cookies?: string | null): ConsentValues {
    const existing = getCookie(cookies);
    return {
        analyticsConsent: existing?.consent.analytics ?? false,
    };
}

/** Oppdater deler av consent og bump updatedAt (beholder createdAt/version) */
export function updateConsent(
    partial: Partial<Pick<ConsentData, "consent" | "userActionTaken">>,
    cookies?: string | null,
): ConsentData {
    const current = getCookie(cookies) ?? makeDefaultConsentData();
    const nowISO = new Date().toISOString();
    const next: ConsentData = {
        consent: {
            analytics: partial.consent?.analytics ?? current.consent.analytics,
        },
        userActionTaken: partial.userActionTaken ?? current.userActionTaken,
        meta: {
            createdAt: current.meta.createdAt,
            updatedAt: nowISO,
            version: current.meta.version ?? CURRENT_VERSION,
        },
    };

    setCookie(next);
    return next;
}

/** Hard reset til default og skriver cookie */
export function resetConsent(): ConsentData {
    const fresh = makeDefaultConsentData();
    setCookie(fresh);
    return fresh;
}
