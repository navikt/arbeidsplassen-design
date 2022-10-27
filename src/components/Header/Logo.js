import React from "react";

function Logo() {
    return (
        <a href="/" className="header-logo" aria-label="Gå til forsiden">
            <i role="img" aria-label="Arbeidsplassen logo" />
        </a>
    );
}

Logo.propTypes = {};

export default Logo;
