import React from "react";
import { HeaderRoutes } from "../Header";

function PersonMenu({ active }) {
    return (
        <ul>
            <li className="dsa-header-hide-on-desktop">
                <a
                    href="/Users/otenav/IdeaProjects/arbeidsplassen-design/public"
                    className={
                        active === HeaderRoutes.PERSON
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Forside
                </a>
            </li>
            <li>
                <a
                    href="/stillinger"
                    className={
                        active === HeaderRoutes.STILLIGER
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Ledige stillinger
                </a>
            </li>
            <li>
                <a
                    href="/jobbtreff"
                    className={
                        active === HeaderRoutes.JOBBTREFF
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    Jobbtreff
                </a>
            </li>
            <li>
                <a
                    href="/cv"
                    className={
                        active === HeaderRoutes.CV
                            ? "dsa-header-active"
                            : undefined
                    }
                >
                    CV
                </a>
            </li>
        </ul>
    );
}

PersonMenu.propTypes = {};

export default PersonMenu;
