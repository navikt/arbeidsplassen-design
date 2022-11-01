import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Logo from "./Logo";
import PersonOrCompany from "./PersonOrCompany";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import PersonMenu from "./PersonMenu";
import CompanyMenu from "./CompanyMenu";
import LoggedInUser from "./LoggedInUser";

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
            <nav aria-label="Hovedmeny" className={classNames("dsa-header", className)}>
                <Logo />

                {menu === "none" ? (
                    <PersonOrCompany active={active} />
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
                    <div className={classNames("dsa-header-menu", { ["dsa-header-menu-hidden"]: isMobileMenuHidden })}>
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
