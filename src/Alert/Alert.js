import React from "react";
import PropTypes from "prop-types";
import XOctagonIcon from "../Feather/XOctagonIcon";
import AlertCircleIcon from "../Feather/AlertCircleIcon";
import AlertTriangleIcon from "../Feather/AlertTriangleIcon";
import XIcon from "../Feather/XIcon";
import joinClassNames from "../joinClassNames";

function Alert({ variant, title, children, onClose, className }) {
    return (
        <div className={joinClassNames("dsa-alert", `dsa-alert-${variant}`, className)}>
            <div className="dsa-alert-heading">
                {variant === "info" && <AlertCircleIcon title="Informasjon" />}
                {variant === "warning" && <AlertTriangleIcon title="Informasjon" />}
                {variant === "error" && <XOctagonIcon title="Informasjon" />}
                {title}
            </div>

            <div>{children}</div>

            {onClose && (
                <button className="dsa-alert-close" onClick={onClose}>
                    <XIcon />
                </button>
            )}
        </div>
    );
}

Alert.defaultProps = {
    variant: "info",
    title: undefined,
    onClose: undefined,
    className: undefined,
};

Alert.propTypes = {
    variant: PropTypes.oneOf(["info", "warning", "error"]),
    title: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string,
};

export default Alert;
