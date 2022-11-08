import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function Tag({ children, variant, small, className }) {
    return (
        <div
            className={joinClassNames(
                "dsa-tag",
                `dsa-tag-${variant}`,
                small ? "dsa-tag-small" : undefined,
                className
            )}
        >
            {children}
        </div>
    );
}

Tag.defaultProps = {
    variant: "neutral",
    className: undefined,
    small: false,
};

Tag.propTypes = {
    small: PropTypes.bool,
    variant: PropTypes.oneOf(["info", "success", "error", "neutral"]),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Tag;
