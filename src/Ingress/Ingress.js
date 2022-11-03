import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function Ingress({ children, className, spacing }) {
    return (
        <p
            className={joinClassNames(
                "dsa-ingress",
                spacing ? `dsa-ingress-space` : undefined,
                className
            )}
        >
            {children}
        </p>
    );
}

Ingress.defaultProps = {
    className: undefined,
    spacing: false,
};

Ingress.propTypes = {
    className: PropTypes.string,
    spacing: PropTypes.bool,
};

export default Ingress;
