import PersonMenu from "./PersonMenu";
import CompanyMenu from "./CompanyMenu";
import type { Variant, Active } from "../types";

interface MenuLinksProps {
    variant: Variant;
    active?: Active;
    className?: string;
    showMuligheter?: boolean;
}

export default function MenuLinks({ variant, active, className, showMuligheter }: MenuLinksProps) {
    return (
        <div className={`arb-header-links ${className}`}>
            {variant === "person" && <PersonMenu active={active} showMuligheter={showMuligheter} />}

            {variant === "company" && <CompanyMenu active={active} />}
        </div>
    );
}
