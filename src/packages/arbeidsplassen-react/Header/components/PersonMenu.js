import React from "react";

function PersonMenu({ active }) {
  return (
    <ul>
      <li>
        <a
          href="/stillinger"
          className={
            active === "ledige-stillinger" ? "arb-header-active" : undefined
          }
        >
          Ledige stillinger
        </a>
      </li>
      <li>
        <a
          href="/jobbtreff"
          className={active === "jobbtreff" ? "arb-header-active" : undefined}
        >
          Jobbtreff
        </a>
      </li>
      <li>
        <a
          href="/cv"
          className={active === "cv" ? "arb-header-active" : undefined}
        >
          CV
        </a>
      </li>
      <li>
        <a
          href="/minside"
          className={active === "min-side" ? "arb-header-active" : undefined}
        >
          Min side
        </a>
      </li>
    </ul>
  );
}

PersonMenu.propTypes = {};

export default PersonMenu;
