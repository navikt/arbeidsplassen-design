import React, { useId } from "react";
import { Link, Heading, BodyShort } from "@navikt/ds-react";
import ArbeidsplassenLogoSmall from "../Logo/ArbeidsplassenLogoSmall";
import { PageBlock } from "@navikt/ds-react/Page";

/** @typedef {import("@navikt/ds-react/Page").PageBlockProps} PageBlockProps */

/**
 * @typedef {"nb" | "nn" | "en" | "ru" | "uk"} FooterLang
 */

/**
 * Props for Footer.
 * @typedef {Object} HeaderProps
 * @property {PageBlockProps["width"]} [contentWidth]
 * @property {PageBlockProps["gutters"]} [contentGutters]
 * @property {FooterLang} [lang]
 */

/** @param {FooterProps} props */
export default function Footer({ contentWidth = "2xl", contentGutters = true, lang = "nb" }) {
    const aboutHeadingId = useId();
    const jobSeekerHeadingId = useId();
    const companyHeadingId = useId();

    return (
        <footer className="arb-footer" lang={lang}>
            <PageBlock width={contentWidth} gutters={contentGutters}>
                <nav className="arb-footer-sections">
                    <section className="arb-footer-section" aria-labelledby={aboutHeadingId}>
                        <Heading id={aboutHeadingId} level="2" size="medium" spacing className="arb-footer-h2">
                            Om oss
                        </Heading>
                        <ul aria-label="Nyttige lenker">
                            <li>
                                <Link href="/kontakt" data-color="neutral">
                                    Kontakt oss
                                </Link>
                            </li>
                            <li>
                                <Link href="/personvern" data-color="neutral">
                                    Personvern
                                </Link>
                            </li>
                            <li>
                                <Link href="/informasjonskapsler" data-color="neutral">
                                    Informasjonskapsler
                                </Link>
                            </li>
                            <li>
                                <Link href="/tilgjengelighet" data-color="neutral">
                                    Tilgjengelighet
                                </Link>
                            </li>
                            <li>
                                <Link href="/om-arbeidsplassen" data-color="neutral">
                                    Om <span translate="no">arbeidsplassen.no</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettstedkart" data-color="neutral">
                                    Nettstedkart
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-footer-section" aria-labelledby={jobSeekerHeadingId}>
                        <Heading id={jobSeekerHeadingId} level="2" size="medium" spacing className="arb-footer-h2">
                            For jobbsøkere
                        </Heading>
                        <ul aria-label="Nyttige lenker for jobbsøkere">
                            <li>
                                <Link href="/nyttige-artikler-for-jobbsokere" data-color="neutral">
                                    Nyttige artikler for jobbsøkere
                                </Link>
                            </li>
                            <li>
                                <Link href="/sporsmal-og-svar" data-color="neutral">
                                    Spørsmål og svar
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobbe-i-utlandet" data-color="neutral">
                                    Jobbe i utlandet (EURES)
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/work-in-norway" lang="en" data-color="neutral">
                                    Information to refugees from Ukraine
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-footer-section" aria-labelledby={companyHeadingId}>
                        <Heading id={companyHeadingId} level="2" size="medium" spacing className="arb-footer-h2">
                            For bedrifter
                        </Heading>
                        <ul aria-label="Nyttige lenker for bedrifter">
                            <li>
                                <Link href="/vilkar-og-retningslinjer" data-color="neutral">
                                    Vilkår og retningslinjer
                                </Link>
                            </li>
                            <li>
                                <Link href="/arbeidsgivertjenester" data-color="neutral">
                                    Hjelp til innlogging
                                </Link>
                            </li>
                            <li>
                                <Link href="/overforing-av-stillingsannonser" data-color="neutral">
                                    Overføre annonser med API
                                </Link>
                            </li>
                            <li>
                                <Link href="/nyttige-artikler-for-bedrifter" data-color="neutral">
                                    Nyttige artikler for bedrifter
                                </Link>
                            </li>
                        </ul>
                    </section>
                </nav>
                <div className="arb-footer-bottom">
                    <Link href="/" className="arb-footer-logo" data-color="neutral">
                        <ArbeidsplassenLogoSmall inverted height="40" width="40" title="Arbeidsplassen logo" />
                    </Link>
                    <BodyShort>
                        <span translate="no">arbeidsplassen.no</span> – en tjeneste fra Nav
                    </BodyShort>
                </div>
            </PageBlock>
        </footer>
    );
}
