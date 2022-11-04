import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import "./Figure.css";

function Figure({ children, className }) {
    return (
        <figure className={joinClassNames("dsa-figure", className)}>
            {children}
        </figure>
    );
}

Figure.defaultProps = {
    className: undefined,
};

Figure.propTypes = {
    className: PropTypes.string,
};

export default Figure;
