import React from "react";
import Menu from "../Feather/Menu";
import XIcon from "../Feather/XIcon";

function MenuButton({ isMobileMenuHidden, toggleMenu }) {
    return (
        <button
            className="dsa-header-menu-button dsa-header-hide-on-desktop"
            onClick={toggleMenu}
        >
            {isMobileMenuHidden ? <Menu /> : <XIcon />}
            {isMobileMenuHidden ? "Meny" : "Lukk"}
        </button>
    );
}

MenuButton.propTypes = {};

export default MenuButton;
