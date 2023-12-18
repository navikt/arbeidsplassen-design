import React, { useEffect } from "react";
import { Link } from "@navikt/ds-react";
import ArbeidsplassenLogoSmall from "../Logo/ArbeidsplassenLogoSmall";

export default function Footer() {
  useEffect(() => {
    try {
      if (!window.location.href.startsWith("https://arbeidsplassen.nav.no/")) {
        const theme = localStorage.getItem("theme");
        if (theme && theme === "dark") {
          document.body.dataset.theme = "arbeidsplassen-dark";
        } else {
          document.body.dataset.theme = "arbeidsplassen";
        }
      }
    } catch (err) {
      //ignore
    }
  }, []);

  return (
    <footer className="arb-footer">
      <div className="container-large">
        <nav className="arb-footer-sections">
          <section className="arb-footer-section">
            <h2 className="arb-footer-h2">Om oss</h2>
            <ul>
              <li>
                <Link href="/kontakt">Kontakt oss</Link>
              </li>
              <li>
                <Link href="/personvern">Personvern</Link>
              </li>
              <li>
                <Link href="/tilgjengelighet">Tilgjengelighet</Link>
              </li>
              <li>
                <Link href="/om-arbeidsplassen">
                  Om <span translate="no">arbeidsplassen.no</span>
                </Link>
              </li>
            </ul>
          </section>

          <section className="arb-footer-section">
            <h2 className="arb-footer-h2">For jobbsøkere</h2>
            <ul>
              <li>
                <Link href="/nyttige-artikler-for-jobbsokere">
                  Nyttige artikler for jobbsøkere
                </Link>
              </li>
              <li>
                <Link href="/sporsmal-og-svar">Spørsmål og svar</Link>
              </li>
              <li>
                <Link href="/jobbe-i-utlandet">Jobbe i utlandet</Link>
              </li>
              <li>
                <Link href="/en/work-in-norway">
                  Information to refugees from Ukraine
                </Link>
              </li>
            </ul>
          </section>

          <section className="arb-footer-section">
            <h2 className="arb-footer-h2">For bedrifter</h2>
            <ul>
              <li>
                <Link href="/vilkar-og-retningslinjer">
                  Vilkår og retningslinjer
                </Link>
              </li>
              <li>
                <Link href="/arbeidsgivertjenester">Hjelp til innlogging</Link>
              </li>
              <li>
                <Link href="/overforing-av-stillingsannonser">
                  Overføre annonser med API
                </Link>
              </li>
              <li>
                <Link href="/nyttige-artikler-for-bedrifter">
                  Nyttige artikler for bedrifter
                </Link>
              </li>
            </ul>
          </section>
        </nav>
        <section className="arb-footer-bottom">
          <a href="/" className="arb-footer-logo">
            <ArbeidsplassenLogoSmall
              inverted
              height="40"
              width="40"
              title="Arbeidsplassen logo"
            />
          </a>
          <p className="arb-footer-p">
            <span translate="no">arbeidsplassen.no</span> – en tjeneste fra NAV
          </p>
        </section>
      </div>
    </footer>
  );
}
