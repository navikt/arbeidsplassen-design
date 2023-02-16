import React from "react";

function PersonCompanyMenu({ active }) {
  return (
    <div className="arb-header-menu-both">
      <ul>
        <li>
          <a
            href="/"
            className={active === "person" ? "arb-header-active" : undefined}
          >
            Person
          </a>
        </li>
        <li>
          <a
            href="/bedrift"
            className={active === "bedrift" ? "arb-header-active" : undefined}
          >
            Bedrift
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PersonCompanyMenu;
