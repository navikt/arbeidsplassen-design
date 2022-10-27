import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Card({ children, className }) {
    return <div className={classNames("card", className)}>{children}</div>;
}

Card.defaultProps = {
    className: undefined,
};

Card.propTypes = {
    className: PropTypes.string,
};

export default Card;
