import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import "./Container.css";

function Container({ size, children, className }) {
    return (
        <div className={joinClassNames("dsa-container", className)}>
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
    size: "xlarge",
};

Container.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(["xlarge", "large", "medium"]),
};

export default Container;
