import React from "react";
import ArbeidsplassenLogo from "../../Logo/ArbeidsplassenLogo";
import ArbeidsplassenLogoSmall from "../../Logo/ArbeidsplassenLogoSmall";
function Logo() {
  return (
    <a href="/" className="arb-header-logo">
      <ArbeidsplassenLogo
        width="216"
        height="48"
        className="arb-header-logo-desktop"
        title="Arbeidsplassen"
      />
      <ArbeidsplassenLogoSmall
        width="48"
        height="48"
        className="arb-header-logo-mobile"
        title="Arbeidsplassen"
      />
    </a>
  );
}

Logo.propTypes = {};

export default Logo;
