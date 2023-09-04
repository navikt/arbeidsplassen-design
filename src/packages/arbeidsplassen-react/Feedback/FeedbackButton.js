import React from "react";

function FeedbackButton({
  children,
  icon,
  className,
  onClick,
  htmlType = "button",
  ariaDescribedBy,
}) {
  return (
    <button
      aria-describedby={ariaDescribedBy}
      type={htmlType}
      className={
        className ? `arb-feedback-button ${className}` : "arb-feedback-button"
      }
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

export default FeedbackButton;
