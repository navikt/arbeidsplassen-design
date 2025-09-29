import React from "react";
import { Button } from "@navikt/ds-react";

/**
 * @typedef {"primary"
 *     | "primary-neutral"
 *     | "secondary"
 *     | "secondary-neutral"
 *     | "tertiary"
 *     | "tertiary-neutral"
 *     | "danger"} ButtonVariant
 */

/**
 * Props for FeedbackButton.
 * - Fritekst i klammeparentes betyr **optional**
 * - Du kan dokumentere default med `=`
 *
 * @typedef {Object} FeedbackButtonProps
 * @property {React.ReactNode} children
 * @property {React.ReactNode} [icon]
 * @property {ButtonVariant} [variant="tertiary-neutral"]
 * @property {string} [className]
 * @property {(e: React.MouseEventHandler<HTMLButtonElement>) => void} [onClick]
 * @property {string} [ariaDescribedby]
 */

/** @param {FeedbackButtonProps} props */
function FeedbackButton({
  children,
  icon,
  variant = "tertiary-neutral",
  className,
  onClick,
  ariaDescribedby,
}) {
  return (
    <Button
      variant={variant}
      className={
        className ? `arb-feedback-button ${className}` : "arb-feedback-button"
      }
      onClick={onClick}
      aria-describedby={ariaDescribedby}
    >
      <span className="arb-feedback-button-inner">
        {icon}
        {children}
      </span>
    </Button>
  );
}

export default FeedbackButton;
