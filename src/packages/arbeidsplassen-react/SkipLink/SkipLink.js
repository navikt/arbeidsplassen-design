import React from "react";
import { Link } from "@navikt/ds-react";

function SkipLink({ href = "#main", text = "Hopp til innhold" }) {
    return (
        <Link href={href} className="arb-skip-link">
            {text}
        </Link>
    );
}

export default SkipLink;
