import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function BodyText({ children, className }) {
    return (
        <p className={joinClassNames("dsa-body-text", className)}>{children}</p>
    );
}

BodyText.defaultProps = {
    className: undefined,
};

BodyText.propTypes = {
    className: PropTypes.string,
};

export default BodyText;
