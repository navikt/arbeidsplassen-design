import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function Tag({ children, color, small, className }) {
    return (
        <div
            className={joinClassNames(
                "dsa-tag",
                `dsa-tag-${color}`,
                small ? "dsa-tag-small" : undefined,
                className
            )}
        >
            {children}
        </div>
    );
}

Tag.defaultProps = {
    color: "blue",
    className: undefined,
    small: false,
};

Tag.propTypes = {
    small: PropTypes.bool,
    color: PropTypes.oneOf(["blue", "green", "red", "grey"]),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Tag;
