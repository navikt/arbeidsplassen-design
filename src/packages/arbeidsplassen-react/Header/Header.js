import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import MenuButton from "./components/MenuButton";
import LoggedInContent from "./components/LoggedInContent";
import MenuLinks from "./components/MenuLinks";

function joinClassNames(...strings) {
  return strings.filter((x) => typeof x === "string" && x.length > 0).join(" ");
}

/**
 * @typedef { "is-authenticated" | "not-authenticated" | "unknown" } AuthenticationStatus
 */

/**
 * @typedef { "company" | "person" | "all"  } Variant
 */
/**
 * @typedef { "ledige-stillinger" | "stillingsannonser" | "sommerjobb" } Active
 */

/**
 * Props for Header.
 * @typedef {Object} HeaderProps
 * @property {string} [className]
 * @property {Variant} [variant]
 * @property {Active} [active]
 * @property {AuthenticationStatus} [authenticationStatus]
 * @property {(e: React.MouseEventHandler<HTMLButtonElement>) => void} onLogin
 * @property {(e: React.MouseEventHandler<HTMLButtonElement>) => void} onLogout
 */

/** @param {HeaderProps} props */
export default function Header({
  className,
  variant = "all",
  active,
  authenticationStatus = "unknown",
  onLogin,
  onLogout,
}) {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMobileMenuHidden((prevState) => !prevState);
  };

  return (
    <header className="container-large arb-header-wrapper" lang="no">
      <nav
        aria-label="Hovedmeny"
        className={joinClassNames("arb-header", className)}
      >
        <div className="arb-header-top">
          <Logo />

          <MenuButton
            toggleMenu={toggleMenu}
            isMobileMenuHidden={isMobileMenuHidden}
          />

          <MenuLinks
            variant={variant}
            active={active}
            className="arb-header-links-above-large"
          />

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
            isMobileMenuHidden ? "arb-header-menu-hidden" : undefined
          )}
        >
          <MenuLinks
            variant={variant}
            active={active}
            className="arb-header-links-below-large"
          />

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

Header.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["person", "company"]),
  authenticationStatus: PropTypes.oneOf([
    "unknown",
    "is-authenticated",
    "not-authenticated",
  ]),
  active: PropTypes.oneOf([
    "ledige-stillinger",
    "stillingsannonser",
    "sommerjobb",
  ]),
};
