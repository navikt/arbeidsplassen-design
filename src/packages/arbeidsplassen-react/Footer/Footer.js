import React from "react";

export default function Footer() {
  return (
    <footer className="arb-footer">
      <nav className="arb-footer-sections">
        <section className="arb-footer-section">
          <h2 className="arb-footer-h2">Om oss</h2>
          <ul>
            <li>
              <a href="/kontakt">Kontakt oss</a>
            </li>
            <li>
              <a href="/personvern">Personvern</a>
            </li>
            <li>
              <a href="/tilgjengelighet">Tilgjengelighet</a>
            </li>
            <li>
              <a href="/om-arbeidsplassen">
                Om <span translate="no">arbeidsplassen.no</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="arb-footer-section">
          <h2 className="arb-footer-h2">For jobbsøkere</h2>
          <ul>
            <li>
              <a href="/sporsmal-og-svar">Spørsmål og svar</a>
            </li>
            <li>
              <a href="/jobbe-i-utlandet">Jobbe i utlandet</a>
            </li>
            <li>
              <a href="/en/work-in-norway">
                Information to refugees from Ukraine
              </a>
            </li>
          </ul>
        </section>

        <section className="arb-footer-section">
          <h2 className="arb-footer-h2">For bedrifter</h2>
          <ul>
            <li>
              <a href="/vilkar-og-retningslinjer">Vilkår og retningslinjer</a>
            </li>
            <li>
              <a href="/arbeidsgivertjenester">Hjelp til innlogging</a>
            </li>
            <li>
              <a href="/overforing-av-stillingsannonser">
                Overføre annonser med API
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <div className="arb-footer-bottom">
        <a href="/" className="arb-footer-logo">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Arbeidsplassen"
          >
            <path
              className="arb-footer-logo-bg"
              d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40L40 40L40 20Z"
            />
            <path
              className="arb-footer-logo-text"
              d="M19.4521 25.9127C20.1144 25.9277 20.7724 25.8027 21.3832 25.5461C21.9939 25.2894 22.5436 24.9068 22.9963 24.4232C23.4491 23.9396 23.7948 23.3659 24.0107 22.7396C24.2267 22.1134 24.3081 21.4486 24.2496 20.7887C24.2945 20.1318 24.2036 19.4726 23.9826 18.8524C23.7617 18.2321 23.4154 17.6639 22.9654 17.1832C22.5153 16.7026 21.9712 16.3197 21.3667 16.0585C20.7623 15.7972 20.1106 15.6632 19.4521 15.6647C18.7899 15.6497 18.1319 15.7747 17.5211 16.0313C16.9104 16.288 16.3607 16.6706 15.9079 17.1542C15.4552 17.6378 15.1095 18.2115 14.8936 18.8378C14.6776 19.464 14.5962 20.1288 14.6547 20.7887C14.5962 21.4486 14.6776 22.1134 14.8936 22.7396C15.1095 23.3659 15.4552 23.9396 15.9079 24.4232C16.3607 24.9068 16.9104 25.2894 17.5211 25.5461C18.1319 25.8027 18.7899 25.9277 19.4521 25.9127V25.9127ZM18.6609 12.3115C19.7808 12.2722 20.8908 12.5333 21.8758 13.0678C22.8607 13.6022 23.6847 14.3904 24.2622 15.3507V13.1027C24.2709 13.0203 24.3084 12.9436 24.3682 12.8861C24.4279 12.8287 24.506 12.7942 24.5887 12.7887H27.4521C27.5348 12.7942 27.613 12.8287 27.6727 12.8861C27.7324 12.9436 27.77 13.0203 27.7787 13.1027V25.7495H29.0346C29.1081 25.7512 29.1798 25.773 29.2418 25.8127C29.3038 25.8523 29.3537 25.9083 29.3861 25.9743C29.4185 26.0404 29.4321 26.1141 29.4255 26.1874C29.4189 26.2607 29.3922 26.3308 29.3485 26.39L28.5448 28.6254C28.5448 28.7887 28.3941 28.7887 28.2308 28.7887H24.7143C24.6316 28.7832 24.5535 28.7487 24.4938 28.6913C24.434 28.6339 24.3965 28.5572 24.3878 28.4747V26.2267C23.8226 27.1982 23.0011 27.9956 22.0132 28.5316C21.0254 29.0676 19.9091 29.3217 18.7865 29.2659C14.6295 29.2659 11.1005 25.4355 11.1005 20.7887C11.0186 19.733 11.1504 18.6717 11.4881 17.6681C11.8258 16.6646 12.3625 15.7395 13.0659 14.9481C13.7694 14.1567 14.6252 13.5153 15.5822 13.0623C16.5393 12.6093 17.5778 12.3539 18.6358 12.3115H18.6609Z"
            />
          </svg>
        </a>
        <p className="arb-footer-p">
          <span translate="no">arbeidsplassen.no</span> – en tjeneste fra Nav
        </p>
      </div>
    </footer>
  );
}
