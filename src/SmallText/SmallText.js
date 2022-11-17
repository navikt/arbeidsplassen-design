import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function SmallText({ children, className }) {
    return (
        <p className={joinClassNames("dsa-small-text", className)}>
            {children}
        </p>
    );
}

SmallText.defaultProps = {
    className: undefined,
};

SmallText.propTypes = {
    className: PropTypes.string,
};

export default SmallText;
