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
    document.cookie = `${consentCookieName}=${jsonString}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
  } catch (e) {
    console.error(`Failed to set cookie "${consentCookieName}":`, e);
    throw new Error(
      `Failed to set cookie "${consentCookieName}": ${e.message}`
    );
  }
}

export function getCookie() {
  if (typeof document === "undefined") {
    return;
  }

  const match = document.cookie.match(
    new RegExp(`(^| )${consentCookieName}=([^;]+)`)
  );
  if (!match) return null;

  try {
    const parsedData = JSON.parse(decodeURIComponent(match[2]));
    if (!validateAgainstSchema(parsedData, ConsentDataSchema)) {
      throw new Error(
        `Cookie "${consentCookieName}" does not match the expected schema.`
      );
    }
    return parsedData;
  } catch (e) {
    console.warn(`Failed to parse cookie "${consentCookieName}":`, e);
    throw new Error(
      `Failed to get cookie "${consentCookieName}": ${e.message}`
    );
  }
}

export function getCreatedAtValue() {
  try {
    const existingCookie = getCookie();
    return existingCookie?.meta?.createdAt || new Date().toISOString();
  } catch (error) {
    console.warn(
      `Error getting createdAt value from cookie "${consentCookieName}":`,
      error
    );
    return new Date().toISOString();
  }
}

export function getUserActionTakenValue() {
  try {
    const existingCookie = getCookie();
    return existingCookie?.userActionTaken || false;
  } catch (error) {
    console.warn(
      `Error getting userActionTaken value from cookie "${consentCookieName}":`,
      error
    );
    return false;
  }
}

export function getConsentValues() {
  try {
    const existingCookie = getCookie();
    return {
      analyticsConsent: existingCookie?.consent?.analytics || false,
      surveysConsent: existingCookie?.consent?.surveys || false,
    };
  } catch (error) {
    console.warn(
      `Error retrieving consent values for "${consentCookieName}":`,
      error
    );
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
