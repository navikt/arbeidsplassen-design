import React from "react";

function PersonMenu({ active }) {
  return (
    <ul>
      <li className="arb-header-hide-on-desktop">
        <a
          href="/Users/otenav/IdeaProjects/arbeidsplassen-design/src/pages"
          className={active === "person" ? "arb-header-active" : undefined}
        >
          Forside
        </a>
      </li>
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
    </ul>
  );
}

PersonMenu.propTypes = {};

export default PersonMenu;
