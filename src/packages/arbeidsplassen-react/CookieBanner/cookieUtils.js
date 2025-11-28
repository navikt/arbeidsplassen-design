const ConsentDataSchema = {
    consent: {
        analytics: "boolean",
        surveys: "boolean",
    },
    userActionTaken: "boolean",
    meta: {
        createdAt: "string",
        updatedAt: "string",
        version: "number",
    },
};
const consentCookieName = "arbeidsplassen-consent";

export function setCookie(value, days = 90) {
    if (typeof document === "undefined") {
        return;
    }

    try {
        const jsonString = encodeURIComponent(JSON.stringify(value));
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        const isProduction = process.env.NODE_ENV === "production";
        const secureFlag = isProduction ? "; Secure" : "";
        document.cookie = `${consentCookieName}=${jsonString}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${secureFlag}`;
    } catch (e) {
        console.error(`Failed to set cookie "${consentCookieName}":`, e);
        throw new Error(`Failed to set cookie "${consentCookieName}": ${e.message}`);
    }
}

export function getCookie(cookies = null) {
    if (cookies) {
        const match = cookies.match(new RegExp(`(^| )${consentCookieName}=([^;]+)`));
        if (!match) return null;

        const cookieData = parseConsentCookie(decodeURIComponent(match[2]));

        if (!validateAgainstSchema(cookieData, ConsentDataSchema)) {
            console.warn(`Cookie "${consentCookieName}" does not match the expected schema.`);
            return null;
        }

        return cookieData;
    } else {
        if (typeof document === "undefined") {
            return null;
        }

        const match = document.cookie.match(new RegExp(`(^| )${consentCookieName}=([^;]+)`));
        if (!match) return null;

        const cookieData = parseConsentCookie(decodeURIComponent(match[2]));

        if (!validateAgainstSchema(cookieData, ConsentDataSchema)) {
            console.warn(`Cookie "${consentCookieName}" does not match the expected schema.`);
            return null;
        }

        return cookieData;
    }
}

function isValidISOString(dateString) {
    const date = new Date(dateString);
    return date.toISOString() === dateString;
}

function parseConsentCookie(cookieString) {
    const consentData = {
        consent: {
            analytics: false,
            surveys: false,
        },
        userActionTaken: false,
        meta: {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            version: 1,
        },
    };

    try {
        const decodedString = decodeURIComponent(cookieString);

        const trimmedString = decodedString.replace(/^{|}$/g, "");

        const keyValuePairs = trimmedString.match(/"([^"]+)":(".*?"|\d+|true|false)/g);

        if (!keyValuePairs) {
            throw new Error("Invalid cookie format");
        }

        keyValuePairs.forEach((pair) => {
            const [key, rawValue] = pair.split(/:(.+)/).map((s) => s.trim().replace(/^"|"$/g, ""));

            let value;
            if (rawValue === "true") value = true;
            else if (rawValue === "false") value = false;
            else if (!isNaN(rawValue)) value = Number(rawValue);
            else value = rawValue;

            switch (key) {
                case "analytics":
                    consentData.consent.analytics = value;
                    break;
                case "surveys":
                    consentData.consent.surveys = value;
                    break;
                case "userActionTaken":
                    consentData.userActionTaken = value;
                    break;
                case "createdAt":
                    consentData.meta.createdAt = isValidISOString(value) ? value : new Date().toISOString();
                    break;
                case "updatedAt":
                    consentData.meta.updatedAt = isValidISOString(value) ? value : new Date().toISOString();
                    break;
                case "version":
                    consentData.meta.version = value;
                    break;
                default:
                    break;
            }
        });
    } catch (error) {
        console.error("Failed to parse consent cookie:", error);
    }

    return consentData;
}

export function getCreatedAtValue(cookies = null) {
    try {
        const existingCookie = getCookie(cookies);
        return existingCookie?.meta?.createdAt || new Date().toISOString();
    } catch (error) {
        console.warn(`Error getting createdAt value from cookie "${consentCookieName}":`, error);
        return new Date().toISOString();
    }
}

export function getUserActionTakenValue(cookies = null) {
    try {
        const existingCookie = getCookie(cookies);
        return existingCookie?.userActionTaken || false;
    } catch (error) {
        console.warn(`Error getting userActionTaken value from cookie "${consentCookieName}":`, error);
        return false;
    }
}

export function getConsentValues(cookies = null) {
    try {
        const existingCookie = getCookie(cookies);
        return {
            analyticsConsent: existingCookie?.consent?.analytics || false,
            surveysConsent: existingCookie?.consent?.surveys || false,
        };
    } catch (error) {
        console.warn(`Error retrieving consent values for "${consentCookieName}":`, error);
        return {
            analyticsConsent: false,
            surveysConsent: false,
        };
    }
}

function validateAgainstSchema(obj, schema) {
    if (typeof obj !== "object" || obj === null) return false;

    return Object.entries(schema).every(([key, type]) => {
        if (typeof type === "object") {
            return obj[key] && validateAgainstSchema(obj[key], type);
        }
        return obj.hasOwnProperty(key) && typeof obj[key] === type;
    });
}
