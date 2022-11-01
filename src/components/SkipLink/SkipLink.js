import React from "react";
import PropTypes from "prop-types";

function SkipLink({ href }) {
    return (
        <a className={"dsa-skip-link"} href={href}>
            Gå til hovedinnhold
        </a>
    );
}

SkipLink.propTypes = {
    href: PropTypes.string.isRequired,
};

export default SkipLink;
