import React from "react";
import PropTypes from "prop-types";

function RichText({ children, className }) {
    return <div className={className ? "arb-rich-text " + className : "arb-rich-text"}>{children}</div>;
}

RichText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default RichText;
