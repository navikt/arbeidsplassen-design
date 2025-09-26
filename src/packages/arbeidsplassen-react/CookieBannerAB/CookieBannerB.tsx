import  React, { useEffect, useMemo } from "react";

import {ConsentData, getCreatedAtValue, setCookie} from "./cookieBannerUtils";
import {BodyLong, BodyShort, Box, Button, Heading, Link, Stack} from "@navikt/ds-react";

export type CookieBannerVariant = "A" | "B";
export type CookieBannerAcceptedPayload = Readonly<{
    variant: CookieBannerVariant;
    url: string;
}>;

type HeadingLevel = "1" | "2" | "3" | "4" | "5" | "6";

export type CookieBannerProps = {
    headingLevel?: HeadingLevel;

    /** Kalles hvis lagring av cookie feiler */
    onError?: (error: unknown) => void;

    /** Eksterne hooks – disse kalles ETTER at komponenten ev. har satt cookie */
    onNecessaryOnly?: () => void;
    onAcceptAll?: () => void;

    /** Lifecycle */
    onOpen?: () => void;
    onClose?: () => void;

    /**
     * Bevar disse localStorage-nøklene når banneret vises (clear + reinsert).
     * Default: ["isDebug"].
     */
    preserveLocalStorageKeys?: readonly string[];

    /**
     * Default: false.
     * Hvis true, så vil komponenten IKKE sette consent-cookie automatisk.
     * Du kan da selv håndtere lagring i onAcceptAll/onNecessaryOnly.
     */
    disableAutoCookie?: boolean;

    /** Just in case du vil endre lenke/tekst uten å wrappe komponenten */
    cookieInfoHref?: string;
    titleId?: string;
    sectionId?: string;
    variant?: CookieBannerVariant;
    getUrl?: () => string;
    onAcceptedAllTrack?: (payload: CookieBannerAcceptedPayload) => void;
};

const CONSENT_VERSION = 1 as const;

const buildConsentData = (acceptedAll: boolean): ConsentData => {
    const createdAt = getCreatedAtValue();
    const nowIso = new Date().toISOString();

    return {
        consent: { analytics: acceptedAll, surveys: acceptedAll },
        userActionTaken: true,
        meta: { createdAt, updatedAt: nowIso, version: CONSENT_VERSION },
    };
};
const defaultGetUrl = (): string => {
    if (typeof window === "undefined") return "/";
    return window.location.pathname;
};
export default function CookieBannerB({
    headingLevel = "1",
    onError,
    onNecessaryOnly,
    onAcceptAll,
    onOpen,
    onClose,
    preserveLocalStorageKeys = ["isDebug"],
    disableAutoCookie = false,
    cookieInfoHref = "/informasjonskapsler",
    titleId = "arb-cookie-banner-title",
    sectionId = "arb-cookie-banner-section",
    variant = "A",
    getUrl = defaultGetUrl,
    onAcceptedAllTrack,
}: CookieBannerProps) {
    // memoize lista slik at effect ikke rerunner pga referanseendring
    const preservedKeys = useMemo<readonly string[]>(() => preserveLocalStorageKeys, [preserveLocalStorageKeys]);

    useEffect(() => {
        try {
            const preserved: Record<string, string> = {};
            preservedKeys.forEach((key) => {
                const val = localStorage.getItem(key);
                if (val !== null) preserved[key] = val;
            });

            localStorage.clear();

            Object.entries(preserved).forEach(([k, v]) => {
                localStorage.setItem(k, v);
            });
        } catch {
            // Bevisst stilletiende – localStorage kan være disabled
        }
    }, [preservedKeys]);

    useEffect(() => {
        onOpen?.();
    }, [onOpen]);

    const persistConsentSafely = (acceptedAll: boolean): void => {
        if (disableAutoCookie) return;
        try {
            const data = buildConsentData(acceptedAll);
            setCookie(data);
        } catch (err) {
            onError?.(err);
        }
    };

    const handleNecessaryOnlyClick = (): void => {
        persistConsentSafely(false);
        onNecessaryOnly?.();
        onClose?.();
    };

    const handleAcceptAllClick = (): void => {
        persistConsentSafely(true);
        onAcceptAll?.();
        onClose?.();
        onAcceptedAllTrack?.({
            variant,
            url: getUrl(),
        });
    };

    return (
        <Box
            as="section"
            aria-labelledby={titleId}
            id={sectionId}
            background="surface-alt-2-subtle"
        >
            <div className="container-large">
                <Heading level={headingLevel} size="large" spacing id="arb-cookie-banner-title">
                    Cookies for en trygg og bedre tjeneste
                </Heading>
                <BodyLong spacing={true}>
                    Nødvendige cookies må til for at siden skal fungere. Godtar du alle, kan vi bruke anonymisert
                    statistikk til å forbedre jobbsøket.{" "}
                    <strong>Uansett valg deler vi aldri dine data med andre.</strong> Du kan endre valget senere.
                </BodyLong>
                <BodyLong spacing={true}>
                    <Link href={cookieInfoHref} variant="neutral" inlineText>
                        Mer om informasjonskapsler på arbeidsplassen.no
                    </Link>
                </BodyLong>

                <Stack gap="2" direction={{ xs: "column", sm: "row" }}>
                    <Button type="button" variant="secondary-neutral" onClick={handleAcceptAllClick}>
                        Godta alle informasjonskapsler
                    </Button>
                    <Button type="button" variant="secondary-neutral" onClick={handleNecessaryOnlyClick}>
                        Kun nødvendige
                    </Button>
                </Stack>
            </div>
        </Box>
    );
}
