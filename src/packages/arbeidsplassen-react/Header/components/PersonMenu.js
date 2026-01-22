import React from "react";
import MenuItem from "./MenuItem";

function PersonMenu({ active }) {
    return (
        <ul>
            <li>
                <MenuItem href="/stillinger" active={active} id="ledige-stillinger">
                    Ledige stillinger
                </MenuItem>
            </li>
            <li>
                <MenuItem href="/ung" active={active} id="ung">
                    Ung
                </MenuItem>
            </li>
            <li className="arb-header-divider">
                <MenuItem href="/bedrift" id="for-bedrifter">
                    For bedrifter
                </MenuItem>
            </li>
        </ul>
    );
}

PersonMenu.propTypes = {};

export default PersonMenu;
