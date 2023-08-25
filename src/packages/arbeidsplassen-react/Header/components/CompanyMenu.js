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
        >
          Stillingsannonser
        </MenuItem>
      </li>
      <li>
        <MenuItem
          active={active}
          href="/jobbtreff/bedrift"
          id="jobbtreff-bedrift"
        >
          Jobbtreff
        </MenuItem>
      </li>
      <li>
        <MenuItem active={active} href="/stillingsregistrering" id="var-side">
          Vår side
        </MenuItem>
      </li>
    </ul>
  );
}

export default CompanyMenu;
