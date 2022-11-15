import React from "react";
import PropTypes from "prop-types";
import XOctagon from "../Feather/XOctagon";
import AlertCircle from "../Feather/AlertCircle";
import AlertTriangle from "../Feather/AlertTriangle";
import XIcon from "../Feather/XIcon";
import joinClassNames from "../joinClassNames";

function Alert({
    variant,
    fullscreen,
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
                fullscreen
                    ? "dsa-alert-fullscreen dsa-container"
                    : "dsa-alert-inline",
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
    fullscreen: false,
    closeButton: false,
};

Alert.propTypes = {
    variant: PropTypes.oneOf(["info", "warning", "error"]),
    fullscreen: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
};

export default Alert;
