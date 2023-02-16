import React from "react";

function CompanyMenu({ active }) {
  return (
    <ul>
      <li>
        <a
          href="/stillingsregistrering/stillingsannonser"
          className={
            active === "stillingsannonser" ? "arb-header-active" : undefined
          }
        >
          Stillingsannonser
        </a>
      </li>
      <li>
        <a
          href="/jobbtreff/bedrift"
          className={
            active === "jobbtreff-bedrift" ? "arb-header-active" : undefined
          }
        >
          Jobbtreff
        </a>
      </li>
      <li>
        <a
          href="/kandidater/lister"
          className={
            active === "kandidatlister" ? "arb-header-active" : undefined
          }
        >
          Kandidatlister
        </a>
      </li>
      <li>
        <a
          href="/stillingsregistrering"
          className={active === "var-side" ? "arb-header-active" : undefined}
        >
          Vår side
        </a>
      </li>
    </ul>
  );
}

export default CompanyMenu;
