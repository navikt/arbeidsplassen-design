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

export default function Header({
    className,
    menu,
    active,
    userName,
    authenticationStatus,
    handleLogInClick,
    handleLogOutClick,
}) {
    const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

    const toggleMenu = () => {
        setIsMobileMenuHidden((prevState) => !prevState);
    };

    return (
        <header className="dsa-header-wrapper">
            <nav aria-label="Hovedmeny" className={joinClassNames("dsa-header", className)}>
                <Logo />

                {menu === "none" ? (
                    <PersonCompanyMenu active={active} />
                ) : (
                    <MenuButton toggleMenu={toggleMenu} isMobileMenuHidden={isMobileMenuHidden} />
                )}

                {menu === "none" ? (
                    <LoginButton
                        authenticationStatus={authenticationStatus}
                        handleLogInClick={handleLogInClick}
                        handleLogOutClick={handleLogOutClick}
                    />
                ) : (
                    <div
                        className={joinClassNames(
                            "dsa-header-menu",
                            isMobileMenuHidden ? "dsa-header-menu-hidden" : undefined
                        )}
                    >
                        {menu === "person" && <PersonMenu active={active} />}
                        {menu === "bedrift" && <CompanyMenu active={active} />}

                        {authenticationStatus === "IS_AUTHENTICATED" && (
                            <LoggedInUser menu={menu} userName={userName} />
                        )}

                        {menu !== "none" && (
                            <LoginButton
                                authenticationStatus={authenticationStatus}
                                handleLogInClick={handleLogInClick}
                                handleLogOutClick={handleLogOutClick}
                            />
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}

Header.defaultProps = {
    menu: "none",
    active: "person",
    authenticationStatus: "UNKNOWN",
    userName: undefined,
};

Header.propTypes = {
    handleLogInClick: PropTypes.func.isRequired,
    handleLogOutClick: PropTypes.func.isRequired,
    menu: PropTypes.oneOf(["none", "person", "bedrift"]),
    authenticationStatus: PropTypes.oneOf(["UNKNOWN", "IS_AUTHENTICATED", "NOT_AUTHENTICATED"]),
    userName: PropTypes.string,
};
