import React from "react";
import classNames from "classnames";

function CompanyMenu({ active }) {
    return (
        <ul>
            <li className="header-hide-on-desktop">
                <a href="/bedrift">Forside</a>
            </li>
            <li>
                <a
                    href="/bedrift/stillingsannonser"
                    className={classNames({ ["header-active"]: active === "stillingsannonser" })}
                >
                    Stillingsannonser
                </a>
            </li>
            <li>
                <a href="/bedrift/jobbtreff" className={classNames({ ["header-active"]: active === "jobbtreff" })}>
                    Jobbtreff
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/interessemeldinger"
                    className={classNames({ ["header-active"]: active === "interessemeldinger" })}
                >
                    Interessemeldinger
                </a>
            </li>
            <li>
                <a href="/bedrift/kandidater" className={classNames({ ["headeractive"]: active === "kandidater" })}>
                    Kandidatlister
                </a>
            </li>
        </ul>
    );
}

export default CompanyMenu;
