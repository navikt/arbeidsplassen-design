import { type ReactNode } from "react";
import { Link } from "@navikt/ds-react";
import type { Active } from "../types";

interface MenuItemProps {
    href: string;
    active?: Active;
    id?: string;
    children: ReactNode;
    rel?: string;
}

export default function MenuItem({ href, active, id, children, rel }: MenuItemProps) {
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
