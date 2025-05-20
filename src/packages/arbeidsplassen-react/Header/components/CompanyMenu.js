import React from "react";
import MenuItem from "./MenuItem";

function CompanyMenu({ active }) {
  return (
    <ul>
      <li>
        <MenuItem
          active={active}
          href="/stillingsregistrering/stillingsannonser"
          id="stillingsannonser"
          rel="nofollow"
        >
          Stillingsannonser
        </MenuItem>
      </li>
      <li className="arb-header-divider">
        <MenuItem href="/" id="for-jobbsokere">
          For jobbsøkere
        </MenuItem>
      </li>
    </ul>
  );
}

export default CompanyMenu;
