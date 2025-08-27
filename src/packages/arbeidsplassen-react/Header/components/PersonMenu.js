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
        <MenuItem href="/cv?v1" active={active} id="cv">
          CV
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
