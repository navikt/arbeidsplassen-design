import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

const ToolButton = React.forwardRef(
    ({ children, icon, onClick, className, disabled, ariaLabel }, ref) => (
        <button
            ref={ref}
            disabled={disabled}
            onClick={onClick}
            className={joinClassNames("dsa-tool-button", className)}
            type="button"
            aria-label={ariaLabel}
        >
            {icon}
            {children && <div className="dsa-tool-button-text">{children}</div>}
        </button>
    )
);

ToolButton.defaultProps = {
    disabled: false,
    icon: undefined,
    ariaLabel: undefined,
    className: undefined,
};

ToolButton.propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    children: PropTypes.string,
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ToolButton;
