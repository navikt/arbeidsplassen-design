import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function Container({ size, children, className, color }) {
    return (
        <div
            className={joinClassNames(
                "dsa-container",
                `dsa-container-${color}`,
                className
            )}
        >
            <div
                className={joinClassNames(
                    "dsa-container-inner",
                    `dsa-container-inner-${size}`
                )}
            >
                {children}
            </div>
        </div>
    );
}

Container.defaultProps = {
    className: undefined,
    size: "large",
    color: "none",
};

Container.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(["large", "medium", "small"]),
    color: PropTypes.oneOf(["none", "green", "blue", "orange"]),
};

export default Container;
