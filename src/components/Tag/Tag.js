import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Tag({ children, variant, className }) {
    return <div className={classNames("dsa-tag", `dsa-tag-${variant}`, className)}>{children}</div>;
}

Tag.defaultProps = {
    variant: "neutral",
    className: undefined,
};

Tag.propTypes = {
    variant: PropTypes.oneOf(["info", "success", "error", "neutral"]),
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Tag;
