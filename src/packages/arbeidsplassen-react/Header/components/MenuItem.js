import React from "react";
import { Link } from "@navikt/ds-react";

function MenuItem({ href, active, id, children, rel }) {
    return (
        <Link
            href={href}
            className={active === id ? "arb-header-menu-link arb-header-menu-link-active" : "arb-header-menu-link"}
            rel={rel}
        >
            <span className="arb-header-menu-item-inner">{children}</span>
        </Link>
    );
}

MenuItem.propTypes = {};

export default MenuItem;
