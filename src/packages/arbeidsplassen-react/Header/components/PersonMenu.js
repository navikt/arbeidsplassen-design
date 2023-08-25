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
        <MenuItem href="/jobbtreff" active={active} id="jobbtreff">
          Jobbtreff
        </MenuItem>
      </li>
      <li>
        <MenuItem href="/cv" active={active} id="cv">
          CV
        </MenuItem>
      </li>
      <li>
        <MenuItem href="/minside" active={active} id="min-side">
          Min side
        </MenuItem>
      </li>
    </ul>
  );
}

PersonMenu.propTypes = {};

export default PersonMenu;
