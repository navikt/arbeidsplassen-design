import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Container.css";

function Container({ size, children, color, className }) {
    return (
        <div
            className={cn(
                "dsa-container",
                {
                    [`dsa-container-${color}-color`]: color,
                },
                className
            )}
        >
            <div className={cn("dsa-container-inner", `dsa-container-inner-${size}`)}>{children}</div>
        </div>
    );
}

Container.defaultProps = {
    className: undefined,
    color: undefined,
    size: "xlarge",
};

Container.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    size: PropTypes.oneOf(["xlarge", "large", "medium"]),
};

export default Container;
