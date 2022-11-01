import React from "react";
import classNames from "classnames";

function CompanyMenu({ active }) {
    return (
        <ul>
            <li className="dsa-header-hide-on-desktop">
                <a href="/bedrift">Forside</a>
            </li>
            <li>
                <a
                    href="/bedrift/stillingsannonser"
                    className={classNames({ ["dsa-header-active"]: active === "stillingsannonser" })}
                >
                    Stillingsannonser
                </a>
            </li>
            <li>
                <a href="/bedrift/jobbtreff" className={classNames({ ["dsa-header-active"]: active === "jobbtreff" })}>
                    Jobbtreff
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/interessemeldinger"
                    className={classNames({ ["dsa-header-active"]: active === "interessemeldinger" })}
                >
                    Interessemeldinger
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/kandidater"
                    className={classNames({ ["dsa-header-active"]: active === "kandidater" })}
                >
                    Kandidatlister
                </a>
            </li>
        </ul>
    );
}

export default CompanyMenu;
