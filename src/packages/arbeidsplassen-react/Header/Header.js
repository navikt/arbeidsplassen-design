import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import PersonCompanyMenu from "./components/PersonCompanyMenu";
import MenuButton from "./components/MenuButton";
import LoginButton from "./components/LoginButton";
import PersonMenu from "./components/PersonMenu";
import CompanyMenu from "./components/CompanyMenu";
import LoggedInUser from "./components/LoggedInUser";

function joinClassNames(...strings) {
  return strings.filter((x) => typeof x === "string" && x.length > 0).join(" ");
}

export default function Header({
  className,
  variant,
  active,
  userName,
  companyName,
  authenticationStatus,
  onLogin,
  onLogout,
  showChangeCompany,
  onChangeCompanyClick,
}) {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMobileMenuHidden((prevState) => !prevState);
  };

  return (
    <header className="arb-header-wrapper arb-container">
      <nav
        aria-label="Hovedmeny"
        className={joinClassNames("arb-header", className)}
      >
        <Logo />

        {variant === "all" ? (
          <PersonCompanyMenu active={active} />
        ) : (
          <MenuButton
            toggleMenu={toggleMenu}
            isMobileMenuHidden={isMobileMenuHidden}
          />
        )}

        {variant === "all" ? (
          <LoginButton
            authenticationStatus={authenticationStatus}
            handleLogInClick={onLogin}
            handleLogOutClick={onLogout}
          />
        ) : (
          <div
            className={joinClassNames(
              "arb-header-menu",
              isMobileMenuHidden ? "arb-header-menu-hidden" : undefined
            )}
          >
            {variant === "person" && <PersonMenu active={active} />}
            {variant === "company" && <CompanyMenu active={active} />}

            {authenticationStatus === "is-authenticated" && (
              <LoggedInUser
                variant={variant}
                userName={userName}
                companyName={companyName}
                showChangeCompany={showChangeCompany}
                onChangeCompanyClick={onChangeCompanyClick}
              />
            )}

            {variant !== "all" && (
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
  showChangeCompany: false,
  onChangeCompanyClick: undefined,
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
  showChangeCompany: PropTypes.bool,
  onChangeCompanyClick: PropTypes.func,
  active: PropTypes.oneOf([
    "person",
    "bedrift",
    "ledige-stillinger",
    "jobbtreff",
    "cv",
    "stillingsannonser",
    "var-side",
    "jobbtreff-bedrift",
  ]),
};
