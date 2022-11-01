import React from "react";

function CompanyMenu({ active }) {
    return (
        <ul>
            <li className="dsa-header-hide-on-desktop">
                <a href="/bedrift">Forside</a>
            </li>
            <li>
                <a
                    href="/bedrift/stillingsannonser"
                    className={active === "stillingsannonser" ? "dsa-header-active" : undefined}
                >
                    Stillingsannonser
                </a>
            </li>
            <li>
                <a href="/bedrift/jobbtreff" className={active === "jobbtreff" ? "dsa-header-active" : undefined}>
                    Jobbtreff
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/interessemeldinger"
                    className={active === "interessemeldinger" ? "dsa-header-active" : undefined}
                >
                    Interessemeldinger
                </a>
            </li>
            <li>
                <a href="/bedrift/kandidater" className={active === "kandidater" ? "dsa-header-active" : undefined}>
                    Kandidatlister
                </a>
            </li>
        </ul>
    );
}

export default CompanyMenu;
