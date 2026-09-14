import PersonMenu from "./PersonMenu";
import CompanyMenu from "./CompanyMenu";
import type { Variant, Active } from "../types";

interface MenuLinksProps {
    variant: Variant;
    active?: Active;
    className?: string;
}

export default function MenuLinks({ variant, active, className }: MenuLinksProps) {
    return (
        <div className={`arb-header-links ${className}`}>
            {variant === "person" && <PersonMenu active={active} />}

            {variant === "company" && <CompanyMenu active={active} />}
        </div>
    );
}
