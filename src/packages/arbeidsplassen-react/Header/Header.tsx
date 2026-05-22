import { useState, type MouseEventHandler } from "react";
import Logo from "./components/Logo";
import MenuButton from "./components/MenuButton";
import LoggedInContent from "./components/LoggedInContent";
import MenuLinks from "./components/MenuLinks";
import type { AuthenticationStatus, MuligheterAccessStatus, Variant, Active, HeaderLang } from "./types";

function joinClassNames(...strings: (string | undefined)[]) {
    return strings.filter((x) => typeof x === "string" && x.length > 0).join(" ");
}

export interface HeaderProps {
    className?: string;
    variant?: Variant;
    active?: Active;
    authenticationStatus?: AuthenticationStatus;
    muligheterAccessStatus?: MuligheterAccessStatus;
    onLogin: MouseEventHandler<HTMLButtonElement>;
    onLogout: MouseEventHandler<HTMLButtonElement>;
    lang?: HeaderLang;
}

export default function Header({
    className,
    variant = "all",
    active,
    authenticationStatus = "unknown",
    muligheterAccessStatus = "no-access",
    onLogin,
    onLogout,
    lang = "nb",
}: HeaderProps) {
    const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

    const toggleMenu = () => {
        setIsMobileMenuHidden((prevState) => !prevState);
    };

    // TODO: Temporary option, remove when "Muligheter"-mvp is EOL.
    const showMuligheter = muligheterAccessStatus === "has-access" && authenticationStatus === "is-authenticated";

    return (
        <header className="arb-header-wrapper" lang={lang}>
            <nav aria-label="Hovedmeny" className={joinClassNames("arb-header", className)}>
                <div className="arb-header-top">
                    <Logo active={active} />

                    <MenuButton toggleMenu={toggleMenu} isMobileMenuHidden={isMobileMenuHidden} />

                    <MenuLinks variant={variant} active={active} className="arb-header-links-above-large" showMuligheter={showMuligheter}/>

                    <div className="arb-header-spacer" />

                    <LoggedInContent
                        className="arb-header-user-above-tablet"
                        variant={variant}
                        authenticationStatus={authenticationStatus}
                        onLogin={onLogin}
                        onLogout={onLogout}
                    />
                </div>

                <div
                    id="arb-header-menu"
                    className={joinClassNames(
                        "arb-header-menu",
                        isMobileMenuHidden ? "arb-header-menu-hidden" : undefined,
                    )}
                >
                    <MenuLinks variant={variant} active={active} className="arb-header-links-below-large" showMuligheter={showMuligheter}/>

                    <LoggedInContent
                        className="arb-header-user-below-tablet"
                        variant={variant}
                        authenticationStatus={authenticationStatus}
                        onLogin={onLogin}
                        onLogout={onLogout}
                    />
                </div>
            </nav>
        </header>
    );
}
