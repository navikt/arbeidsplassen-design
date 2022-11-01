import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

function Ingress({ children, className }) {
    return <p className={cn("dsa-ingress", className)}>{children}</p>;
}

Ingress.defaultProps = {
    className: undefined,
};

Ingress.propTypes = {
    className: PropTypes.string,
};

export default Ingress;
