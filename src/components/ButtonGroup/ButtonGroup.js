import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function ButtonGroup({ children, className }) {
    return <div className={classNames("button-group", className)}>{children}</div>;
}

ButtonGroup.defaultProps = {
    className: undefined,
};

ButtonGroup.propTypes = {
    className: PropTypes.string,
};

export default ButtonGroup;
