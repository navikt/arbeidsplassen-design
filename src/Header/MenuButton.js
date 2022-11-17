import React from "react";
import Menu from "../Feather/Menu";
import XIcon from "../Feather/XIcon";
import ToolButton from "../ToolButton/ToolButton";

function MenuButton({ isMobileMenuHidden, toggleMenu }) {
    return (
        <ToolButton
            className="dsa-header-menu-button dsa-header-hide-on-desktop"
            onClick={toggleMenu}
            icon={isMobileMenuHidden ? <Menu /> : <XIcon />}
        >
            {isMobileMenuHidden ? "Meny" : "Lukk"}
        </ToolButton>
    );
}

MenuButton.propTypes = {};

export default MenuButton;
