import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function Button({ children, htmlType, variant, icon, onClick, className, disabled }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cn("dsa-button", `dsa-button-${variant}`, className)}
            type={htmlType}
        >
            <>
                {icon && <span className="dsa-button-icon">{icon}</span>}
                <span className="dsa-button-text">{children}</span>
            </>
        </button>
    );
}

Button.defaultProps = {
    variant: "primary",
    disabled: false,
    icon: undefined,
    className: undefined,
    htmlType: "button",
};

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    htmlType: PropTypes.oneOf(["submit", "button", "reset"]),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
