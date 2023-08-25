import React from "react";
import MenuItem from "./MenuItem";

function PersonCompanyMenu({ active }) {
  return (
    <div className="arb-header-menu-both">
      <ul>
        <li>
          <MenuItem href="/" active={active} id="person">
            Person
          </MenuItem>
        </li>
        <li>
          <MenuItem href="/bedrift" active={active} id="bedrift">
            Bedrift
          </MenuItem>
        </li>
      </ul>
    </div>
  );
}

export default PersonCompanyMenu;
