import React from "react";

function ChevronDown({ title = "Ned", ariaHidden = true, size = "1.5em" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
      role="img"
      aria-hidden={ariaHidden}
      aria-label={title}
    >
      <title>{title}</title>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export default ChevronDown;
