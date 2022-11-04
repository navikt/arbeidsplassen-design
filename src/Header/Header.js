import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import PersonCompanyMenu from "./PersonCompanyMenu";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import PersonMenu from "./PersonMenu";
import CompanyMenu from "./CompanyMenu";
import LoggedInUser from "./LoggedInUser";
import joinClassNames from "../joinClassNames";
import "./Header.css";

export const HeaderAuthenticationStatus = {
    UNKNOWN: "UNKNOWN",
    IS_AUTHENTICATED: "IS_AUTHENTICATED",
    NOT_AUTHENTICATED: "NOT_AUTHENTICATED",
};

export const HeaderVariant = {
    ALL: "ALL",
    PERSON: "PERSON",
    COMPANY: "COMPANY",
};

export const HeaderRoutes = {
    PERSON: "PERSON",
    BEDRIFT: "BEDRIFT",
    STILLIGER: "STILLIGER",
    JOBBTREFF: "JOBBTREFF",
    CV: "CV",
    STILLINGSANNONSER: "STILLINGSANNONSER",
    INTERESSEMELDIGER: "INTERESSEMELDIGER",
    KANDIDATLISTER: "KANDIDATLISTER",
    JOBBTREFF_BEDRIFT: "JOBBTREFF_BEDRIFT",
};

export default function Header({
    className,
    variant,
    active,
    userName,
    companyName,
    authenticationStatus,
    onLogin,
    onLogout,
}) {
    const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

    const toggleMenu = () => {
        setIsMobileMenuHidden((prevState) => !prevState);
    };

    return (
        <header className="dsa-header-wrapper">
            <nav
                aria-label="Hovedmeny"
                className={joinClassNames("dsa-header", className)}
            >
                <Logo />

                {variant === HeaderVariant.ALL ? (
                    <PersonCompanyMenu active={active} />
                ) : (
                    <MenuButton
                        toggleMenu={toggleMenu}
                        isMobileMenuHidden={isMobileMenuHidden}
                    />
                )}

                {variant === HeaderVariant.ALL ? (
                    <LoginButton
                        authenticationStatus={authenticationStatus}
                        handleLogInClick={onLogin}
                        handleLogOutClick={onLogout}
                    />
                ) : (
                    <div
                        className={joinClassNames(
                            "dsa-header-menu",
                            isMobileMenuHidden
                                ? "dsa-header-menu-hidden"
                                : undefined
                        )}
                    >
                        {variant === HeaderVariant.PERSON && (
                            <PersonMenu active={active} />
                        )}
                        {variant === HeaderVariant.COMPANY && (
                            <CompanyMenu active={active} />
                        )}

                        {authenticationStatus ===
                            HeaderAuthenticationStatus.IS_AUTHENTICATED && (
                            <LoggedInUser
                                variant={variant}
                                userName={userName}
                                companyName={companyName}
                            />
                        )}

                        {variant !== HeaderVariant.ALL && (
                            <LoginButton
                                authenticationStatus={authenticationStatus}
                                handleLogInClick={onLogin}
                                handleLogOutClick={onLogout}
                            />
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}

Header.defaultProps = {
    variant: HeaderVariant.ALL,
    active: undefined,
    authenticationStatus: HeaderAuthenticationStatus.UNKNOWN,
    userName: undefined,
    companyName: undefined,
};

Header.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(Object.keys(HeaderVariant)),
    authenticationStatus: PropTypes.oneOf(
        Object.keys(HeaderAuthenticationStatus)
    ),
    userName: PropTypes.string,
    companyName: PropTypes.string,
    active: PropTypes.oneOf(Object.keys(HeaderRoutes)),
};
