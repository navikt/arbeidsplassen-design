import { Button } from "@navikt/ds-react";
import { MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";

interface MenuButtonProps {
    isMobileMenuHidden: boolean;
    toggleMenu: () => void;
}

export default function MenuButton({ isMobileMenuHidden, toggleMenu }: MenuButtonProps) {
    return (
        <Button
            variant="tertiary"
            className="arb-header-menu-button arb-header-menu-button-below-desktop"
            onClick={toggleMenu}
            aria-expanded={!isMobileMenuHidden}
            aria-controls="arb-header-menu"
            icon={isMobileMenuHidden ? <MenuHamburgerIcon aria-hidden="true" /> : <XMarkIcon aria-hidden="true" />}
        >
            {isMobileMenuHidden ? "Meny" : "Lukk"}
        </Button>
    );
}
