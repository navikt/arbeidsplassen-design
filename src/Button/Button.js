import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

const Button = React.forwardRef(
    (
        { children, htmlType, variant, icon, onClick, className, disabled },
        ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            onClick={onClick}
            className={joinClassNames(
                "dsa-button",
                `dsa-button-${variant}`,
                className
            )}
            type={htmlType}
        >
            {icon && <span className="dsa-button-icon">{icon}</span>}
            <span className="dsa-button-text">{children}</span>
        </button>
    )
);

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
    onClick: PropTypes.func.isRequired,
};

export default Button;
