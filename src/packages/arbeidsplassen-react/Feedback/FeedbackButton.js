import React from "react";
import { Button } from "@navikt/ds-react";

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
