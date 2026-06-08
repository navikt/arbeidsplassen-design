import ArbeidsplassenLogo from "../../Logo/ArbeidsplassenLogo";
import ArbeidsplassenLogoSmall from "../../Logo/ArbeidsplassenLogoSmall";
import UngLogo from "./UngLogo";
import { Link } from "@navikt/ds-react";
import type { Active } from "../types";

interface LogoProps {
    active?: Active;
}

export default function Logo({ active }: LogoProps) {
    return (
        <Link href="/" className="arb-header-logo">
            <span className="arb-header-logo-flex">
                <ArbeidsplassenLogo
                    width="216"
                    height="48"
                    className="arb-header-logo-desktop"
                    title="Arbeidsplassen logo"
                />
                <ArbeidsplassenLogoSmall
                    width="48"
                    height="48"
                    className="arb-header-logo-mobile"
                    title="Arbeidsplassen logo"
                />
                {active === "ung" && <UngLogo />}
            </span>
        </Link>
    );
}
