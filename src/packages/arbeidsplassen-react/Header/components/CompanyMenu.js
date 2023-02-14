import React from "react";

function CompanyMenu({ active }) {
  return (
    <ul>
      <li className="arb-header-hide-on-desktop">
        <a
          href="/bedrift"
          className={active === "bedrift" ? "arb-header-active" : undefined}
        >
          Forside
        </a>
      </li>
      <li>
        <a
          href="/bedrift/stillingsannonser"
          className={
            active === "stillingsannonser" ? "arb-header-active" : undefined
          }
        >
          Stillingsannonser
        </a>
      </li>
      <li>
        <a
          href="/bedrift/jobbtreff"
          className={
            active === "jobbtreff-bedrift" ? "arb-header-active" : undefined
          }
        >
          Jobbtreff
        </a>
      </li>
      <li>
        <a
          href="/bedrift/interessemeldinger"
          className={
            active === "interessemeldinger" ? "arb-header-active" : undefined
          }
        >
          Interessemeldinger
        </a>
      </li>
      <li>
        <a
          href="/bedrift/kandidater"
          className={
            active === "kandidatlister" ? "arb-header-active" : undefined
          }
        >
          Kandidatlister
        </a>
      </li>
    </ul>
  );
}

export default CompanyMenu;
