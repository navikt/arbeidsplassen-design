import React from "react";

function MenuItem({ href, active, id, children, rel }) {
    return (
        <a
            href={href}
            className={active === id ? "arb-header-menu-link arb-header-menu-link-active" : "arb-header-menu-link"}
            rel={rel}
        >
            <span className="arb-header-menu-item-inner">{children}</span>
        </a>
    );
}

MenuItem.propTypes = {};

export default MenuItem;
