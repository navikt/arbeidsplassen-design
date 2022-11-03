import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function BodyText({ children, className, spacing }) {
    return (
        <p
            className={joinClassNames(
                "dsa-body-text",
                spacing ? `dsa-body-text-space` : undefined,
                className
            )}
        >
            {children}
        </p>
    );
}

BodyText.defaultProps = {
    className: undefined,
    spacing: false,
};

BodyText.propTypes = {
    className: PropTypes.string,
    spacing: PropTypes.bool,
};

export default BodyText;
