import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function Button({ children, htmlType, variant, loading, icon, onClick, className, disabled, ref }) {
    return (
        <button
            disabled={disabled || loading}
            onClick={onClick}
            className={cn("button", `button-${variant}`, { ["button-with-spinner"]: loading }, className)}
            type={htmlType}
        >
            {loading ? (
                <span className="button-spinner" aria-label="Venter" />
            ) : (
                <>
                    {icon && <span className="button-icon">{icon}</span>}
                    <span className="button-text">{children}</span>
                </>
            )}
        </button>
    );
}

Button.defaultProps = {
    variant: "primary",
    loading: false,
    disabled: false,
    icon: undefined,
    className: undefined,
    htmlType: "button",
};

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.node,
    htmlType: PropTypes.oneOf(["submit", "button", "reset"]),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
