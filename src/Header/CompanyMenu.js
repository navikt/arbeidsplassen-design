import React from "react";
import { HeaderRoutes } from "./Header";

function CompanyMenu({ active }) {
    return (
        <ul>
            <li className="dsa-header-hide-on-desktop">
                <a
                    href="/bedrift"
                    className={
                        active === HeaderRoutes.BEDRIFT
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Forside
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/stillingsannonser"
                    className={
                        active === HeaderRoutes.STILLINGSANNONSER
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Stillingsannonser
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/jobbtreff"
                    className={
                        active === HeaderRoutes.JOBBTREFF_BEDRIFT
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Jobbtreff
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/interessemeldinger"
                    className={
                        active === HeaderRoutes.INTERESSEMELDIGER
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Interessemeldinger
                </a>
            </li>
            <li>
                <a
                    href="/bedrift/kandidater"
                    className={
                        active === HeaderRoutes.KANDIDATLISTER
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Kandidatlister
                </a>
            </li>
        </ul>
    );
}

export default CompanyMenu;
