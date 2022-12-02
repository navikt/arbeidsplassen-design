import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";
import Button from "../Button/Button";

function ConfirmationDialogue({
    children,
    onClose,
    onConfirm,
    className,
    closeButton,
    closeText,
    confirmText,
}) {
    return (
        <div
            aria-live="polite"
            className={joinClassNames(
                "dsa-confirmation-dialogue",
                closeButton ? "dsa-confirmation-dialogue-with-close" : undefined,
                "dsa-confirmation-dialogue-inline",
                className
            )}
        >
            <div className="dsa-confirmation-dialogue-inner">
                <div className="dsa-confirmation-dialogue-content">{children}</div>
                <div>
                    <Button
                        className="dsa-confirmation-dialogue-confirm"
                        onClick={onConfirm}
                        ariaLabel={confirmText}
                    >{confirmText}</Button>
                    <Button
                        className="dsa-confirmation-dialogue-close"
                        variant="secondary"
                        onClick={onClose}
                        ariaLabel={closeText}
                    >{closeText}</Button>
                </div>
            </div>
        </div>
    );
}

ConfirmationDialogue.defaultProps = {
    onClose: undefined,
    onConfirm: undefined,
    className: undefined,
    fullscreen: false,
    closeButton: false,
    closeText: "Avbryt",
    confirmText: "Bekreft",
};

ConfirmationDialogue.propTypes = {
    fullscreen: PropTypes.bool,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
    closeText: PropTypes.string,
    confirmText: PropTypes.string,
};

export default ConfirmationDialogue;
