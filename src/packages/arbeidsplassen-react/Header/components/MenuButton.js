import React from "react";
import { Button } from "@navikt/ds-react";
import { MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";

function MenuButton({ isMobileMenuHidden, toggleMenu }) {
  return (
    <Button
      variant="tertiary"
      className="arb-header-menu-button arb-header-menu-button-below-desktop"
      onClick={toggleMenu}
      aria-expanded={isMobileMenuHidden}
      aria-controls="arb-header-menu"
      icon={
        isMobileMenuHidden ? (
          <MenuHamburgerIcon aria-hidden="true" />
        ) : (
          <XMarkIcon aria-hidden="true" />
        )
      }
    >
      {isMobileMenuHidden ? "Meny" : "Lukk"}
    </Button>
  );
}

MenuButton.propTypes = {};

export default MenuButton;
