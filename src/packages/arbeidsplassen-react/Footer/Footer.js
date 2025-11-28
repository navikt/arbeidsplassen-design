import React, { useId } from "react";
import { Link, Heading, BodyShort } from "@navikt/ds-react";
import ArbeidsplassenLogoSmall from "../Logo/ArbeidsplassenLogoSmall";

export default function Footer() {
    const aboutHeadingId = useId();
    const jobSeekerHeadingId = useId();
    const companyHeadingId = useId();

    return (
        <footer className="arb-footer" lang="no">
            <div className="container-large">
                <nav className="arb-footer-sections">
                    <section className="arb-footer-section" aria-labelledby={aboutHeadingId}>
                        <Heading id={aboutHeadingId} level="2" size="medium" spacing className="arb-footer-h2">
                            Om oss
                        </Heading>
                        <ul aria-label="Nyttige lenker">
                            <li>
                                <Link href="/kontakt" variant="neutral">
                                    Kontakt oss
                                </Link>
                            </li>
                            <li>
                                <Link href="/personvern" variant="neutral">
                                    Personvern
                                </Link>
                            </li>
                            <li>
                                <Link href="/informasjonskapsler" variant="neutral">
                                    Informasjonskapsler
                                </Link>
                            </li>
                            <li>
                                <Link href="/tilgjengelighet" variant="neutral">
                                    Tilgjengelighet
                                </Link>
                            </li>
                            <li>
                                <Link href="/om-arbeidsplassen" variant="neutral">
                                    Om <span translate="no">arbeidsplassen.no</span>
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
                                <Link href="/nyttige-artikler-for-jobbsokere" variant="neutral">
                                    Nyttige artikler for jobbsøkere
                                </Link>
                            </li>
                            <li>
                                <Link href="/sporsmal-og-svar" variant="neutral">
                                    Spørsmål og svar
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobbe-i-utlandet" variant="neutral">
                                    Jobbe i utlandet (EURES)
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/work-in-norway" lang="en" variant="neutral">
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
                                <Link href="/vilkar-og-retningslinjer" variant="neutral">
                                    Vilkår og retningslinjer
                                </Link>
                            </li>
                            <li>
                                <Link href="/arbeidsgivertjenester" variant="neutral">
                                    Hjelp til innlogging
                                </Link>
                            </li>
                            <li>
                                <Link href="/overforing-av-stillingsannonser" variant="neutral">
                                    Overføre annonser med API
                                </Link>
                            </li>
                            <li>
                                <Link href="/nyttige-artikler-for-bedrifter" variant="neutral">
                                    Nyttige artikler for bedrifter
                                </Link>
                            </li>
                        </ul>
                    </section>
                </nav>
                <div className="arb-footer-bottom">
                    <Link href="/" className="arb-footer-logo" variant="neutral">
                        <ArbeidsplassenLogoSmall inverted height="40" width="40" title="Arbeidsplassen logo" />
                    </Link>
                    <BodyShort>
                        <span translate="no">arbeidsplassen.no</span> – en tjeneste fra Nav
                    </BodyShort>
                </div>
            </div>
        </footer>
    );
}
