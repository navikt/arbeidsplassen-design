import React from "react";
import Menu from "./icons/Menu";
import XIcon from "./icons/XIcon";
import { Button } from "@navikt/ds-react";

function MenuButton({ isMobileMenuHidden, toggleMenu }) {
  return (
    <Button
      variant="tertiary"
      className="arb-header-menu-button arb-header-hide-on-desktop"
      onClick={toggleMenu}
      icon={isMobileMenuHidden ? <Menu /> : <XIcon />}
    >
      {isMobileMenuHidden ? "Meny" : "Lukk"}
    </Button>
  );
}

MenuButton.propTypes = {};

export default MenuButton;
