import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import "./Ingress.css";

function Ingress({ children, className }) {
    return (
        <p className={joinClassNames("dsa-ingress", className)}>{children}</p>
    );
}

Ingress.defaultProps = {
    className: undefined,
};

Ingress.propTypes = {
    className: PropTypes.string,
};

export default Ingress;
