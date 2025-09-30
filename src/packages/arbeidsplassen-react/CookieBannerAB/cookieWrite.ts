// cookieWrite.ts
type SameSiteValue = "Lax" | "Strict" | "None";

type WriteCookieOptions = {
    name: string;
    value: string;
    days?: number;           // default 90
    path?: string;           // default "/"
    domain?: string;         // default undefined (host-scoped)
    sameSite?: SameSiteValue;// default "Lax"
    secure?: boolean;        // default: infer from protocol OR required by SameSite=None
};

const defaultDays = 90 as const;

export const writeBrowserCookie = (opts: WriteCookieOptions): void => {
    if (typeof document === "undefined") return;

    const {
        name,
        value,
        days = defaultDays,
        path = "/",
        domain,
        sameSite = "Lax",
        secure,
    } = opts;

    // Best effort: https? => secure true; http (localhost) => secure false.
    const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
    const mustSecure = sameSite === "None";
    const secureFlag = typeof secure === "boolean" ? secure : (mustSecure ? true : isHttps);

    // Calculate expiry
    const maxAgeSeconds = Math.round(days * 86400);
    const expiresUTC = new Date(Date.now() + maxAgeSeconds * 1000).toUTCString();

    // Build attributes
    const parts: string[] = [];
    parts.push(`${name}=${encodeURIComponent(value)}`);
    parts.push(`Expires=${expiresUTC}`);
    parts.push(`Max-Age=${maxAgeSeconds}`);
    parts.push(`Path=${path}`);
    if (domain) parts.push(`Domain=${domain}`);
    parts.push(`SameSite=${sameSite}`);
    if (secureFlag) parts.push("Secure");

    document.cookie = parts.join("; ");
};
