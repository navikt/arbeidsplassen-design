import React from "react";
import PersonMenu from "./PersonMenu";
import CompanyMenu from "./CompanyMenu";

function MenuLinks({ variant, active, className, showMuligheter }) {
    return (
        <div className={`arb-header-links ${className}`}>
            {variant === "person" && <PersonMenu active={active} showMuligheter={showMuligheter}/>}

            {variant === "company" && <CompanyMenu active={active} />}
        </div>
    );
}

export default MenuLinks;
