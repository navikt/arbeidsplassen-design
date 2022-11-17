import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function Label({ children, className, mini }) {
    return (
        <p
            className={joinClassNames(
                "dsa-label",
                mini ? "dsa-label-mini" : undefined,
                className
            )}
        >
            {children}
        </p>
    );
}

Label.defaultProps = {
    className: undefined,
    mini: false,
};

Label.propTypes = {
    className: PropTypes.string,
    mini: PropTypes.bool,
};

export default Label;
