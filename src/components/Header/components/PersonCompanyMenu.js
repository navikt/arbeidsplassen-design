import React from "react";

function PersonCompanyMenu({ active }) {
  return (
    <div className="dsa-header-menu-both">
      <ul>
        <li>
          <a
            href="/Users/otenav/IdeaProjects/arbeidsplassen-design/src/pages"
            className={active === "person" ? "dsa-header-active" : undefined}
          >
            Person
          </a>
        </li>
        <li>
          <a
            href="/bedrift"
            className={active === "bedrift" ? "dsa-header-active" : undefined}
          >
            Bedrift
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PersonCompanyMenu;
