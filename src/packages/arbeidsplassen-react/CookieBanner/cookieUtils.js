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

export function setCookie(name, value, days = 90) {
  if (typeof document === "undefined") {
    return;
  }

  try {
    const jsonString = encodeURIComponent(JSON.stringify(value));
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${jsonString}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
  } catch (e) {
    console.error(`Failed to set cookie "${name}":`, e);
    throw new Error(`Failed to set cookie "${name}": ${e.message}`);
  }
}

export function getCookie(name) {
  if (typeof document === "undefined") {
    return;
  }

  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (!match) return null;

  try {
    const parsedData = JSON.parse(decodeURIComponent(match[2]));
    if (!validateAgainstSchema(parsedData, ConsentDataSchema)) {
      throw new Error(`Cookie "${name}" does not match the expected schema.`);
    }
    return parsedData;
  } catch (e) {
    console.warn(`Failed to parse cookie "${name}":`, e);
    throw new Error(`Failed to get cookie "${name}": ${e.message}`);
  }
}

export function getCreatedAtValue(cookieName) {
  try {
    const existingCookie = getCookie(cookieName);
    return existingCookie?.meta?.createdAt || new Date().toISOString();
  } catch (error) {
    console.warn(
      `Error getting createdAt value from cookie "${cookieName}":`,
      error
    );
    return new Date().toISOString();
  }
}

export function getUserActionTakenValue(cookieName) {
  try {
    const existingCookie = getCookie(cookieName);
    return existingCookie?.userActionTaken || false;
  } catch (error) {
    console.warn(
      `Error getting userActionTaken value from cookie "${cookieName}":`,
      error
    );
    return false;
  }
}

export function getConsentValues(cookieName) {
  try {
    const existingCookie = getCookie(cookieName);
    return {
      analyticsConsent: existingCookie?.consent?.analytics || false,
      surveysConsent: existingCookie?.consent?.surveys || false,
    };
  } catch (error) {
    console.warn(`Error retrieving consent values for "${cookieName}":`, error);
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
