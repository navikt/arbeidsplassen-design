import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import PersonCompanyMenu from "./components/PersonCompanyMenu";
import MenuButton from "./components/MenuButton";
import LoginButton from "./components/LoginButton";
import PersonMenu from "./components/PersonMenu";
import CompanyMenu from "./components/CompanyMenu";
import LoggedInUser from "./components/LoggedInUser";
import joinClassNames from "../.utils/joinClassNames";

export const HeaderAuthenticationStatus = {
    UNKNOWN: "unknown",
    IS_AUTHENTICATED: "is-authenticated",
    NOT_AUTHENTICATED: "not-authenticated",
};

export const HeaderVariant = {
    ALL: "all",
    PERSON: "person",
    COMPANY: "company",
};

export const HeaderRoutes = {
    PERSON: "person",
    BEDRIFT: "bedrift",
    STILLIGER: "ledige-stillinger",
    JOBBTREFF: "jobbtreff",
    CV: "cv",
    STILLINGSANNONSER: "stillingsannonser",
    INTERESSEMELDIGER: "interessemeldinger",
    KANDIDATLISTER: "kandidatlister",
    JOBBTREFF_BEDRIFT: "jobbtreff-bedrift",
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
        <header className="dsa-header-wrapper dsa-container">
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
    variant: "all",
    active: undefined,
    authenticationStatus: "unknown",
    userName: undefined,
    companyName: undefined,
};

Header.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["all", "person", "company"]),
    authenticationStatus: PropTypes.oneOf([
        "unknown",
        "is-authenticated",
        "not-authenticated",
    ]),
    userName: PropTypes.string,
    companyName: PropTypes.string,
    active: PropTypes.oneOf([
        "person",
        "bedrift",
        "ledige-stillinger",
        "jobbtreff",
        "cv",
        "stillingsannonser",
        "interessemeldinger",
        "kandidatlister",
        "jobbtreff-bedrift",
    ]),
};
