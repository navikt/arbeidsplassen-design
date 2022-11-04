import React from "react";
import PropTypes from "prop-types";
import XOctagon from "../Feather/XOctagon";
import AlertCircle from "../Feather/AlertCircle";
import AlertTriangle from "../Feather/AlertTriangle";
import XIcon from "../Feather/XIcon";
import joinClassNames from "../joinClassNames";

function Alert({
    variant,
    fullWidth,
    children,
    onClose,
    className,
    closeButton,
}) {
    return (
        <div
            className={joinClassNames(
                "dsa-alert",
                `dsa-alert-${variant}`,
                closeButton ? "dsa-alert-with-close" : undefined,
                fullWidth ? "dsa-alert-full-width" : "dsa-alert-inline",
                className
            )}
        >
            <div className="dsa-alert-inner">
                <div className="dsa-alert-icon">
                    {variant === "info" && <AlertCircle title="Informasjon" />}
                    {variant === "warning" && (
                        <AlertTriangle title="Advarsel" />
                    )}
                    {variant === "error" && <XOctagon title="Feil" />}
                </div>

                <div className="dsa-alert-content">{children}</div>
            </div>
            {closeButton && (
                <button className="dsa-alert-close" onClick={onClose}>
                    <XIcon />
                </button>
            )}
        </div>
    );
}

Alert.defaultProps = {
    variant: "info",
    onClose: undefined,
    className: undefined,
    fullWidth: false,
    closeButton: false,
};

Alert.propTypes = {
    variant: PropTypes.oneOf(["info", "warning", "error"]),
    fullWidth: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
};

export default Alert;
