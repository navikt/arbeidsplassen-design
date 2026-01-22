import React from "react";
import PropTypes from "prop-types";
import ArbeidsplassenLogo from "../../Logo/ArbeidsplassenLogo";
import ArbeidsplassenLogoSmall from "../../Logo/ArbeidsplassenLogoSmall";
import UngLogo from "./UngLogo.js";

function Logo({ active }) {
    return (
        <a href="/" className="arb-header-logo">
            <span className="arb-header-logo-flex">
                <ArbeidsplassenLogo
                    width="216"
                    height="48"
                    className="arb-header-logo-desktop"
                    title="Arbeidsplassen logo"
                />
                <ArbeidsplassenLogoSmall
                    width="48"
                    height="48"
                    className="arb-header-logo-mobile"
                    title="Arbeidsplassen logo"
                />
                {active === "ung" && <UngLogo />}
            </span>
        </a>
    );
}

Logo.propTypes = {
    active: PropTypes.string,
};

export default Logo;
