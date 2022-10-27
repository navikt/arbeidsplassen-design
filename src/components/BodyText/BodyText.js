import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function BodyText({ children, className }) {
    return <p className={cn("body-text", className)}>{children}</p>;
}

BodyText.defaultProps = {
    className: undefined,
};

BodyText.propTypes = {
    className: PropTypes.string,
};

export default BodyText;
