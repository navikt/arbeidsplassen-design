import React from "react";

function ChevronUp({ title = "Opp", ariaHidden = true, size = "1.5em" }) {
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
      className="feather feather-chevron-up"
      role="img"
      aria-hidden={ariaHidden}
      aria-label={title}
    >
      <title>{title}</title>
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );
}

export default ChevronUp;
