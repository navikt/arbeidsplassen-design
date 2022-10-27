import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Container.css";

function Container({ size, children, color, className }) {
    return (
        <div
            className={cn(
                "container",
                {
                    [`container-${color}-color`]: color,
                },
                className
            )}
        >
            <div className={cn("container-inner", `container-inner-${size}`)}>{children}</div>
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
