import React from "react";

function SkipLink({ href = "#main", text = "Hopp til innhold" }) {
  return (
    <a href={href} className="arb-skip-link">
      {text}
    </a>
  );
}

export default SkipLink;
