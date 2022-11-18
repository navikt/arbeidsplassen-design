import React from "react";
import { HeaderRoutes } from "../Header";

function PersonCompanyMenu({ active }) {
    return (
        <div className="dsa-header-menu-both">
            <ul>
                <li>
                    <a
                        href="/Users/otenav/IdeaProjects/arbeidsplassen-design/public"
                        className={
                            active === HeaderRoutes.PERSON
                                ? "dsa-header-active"
                                : undefined
                        }
                    >
                        Person
                    </a>
                </li>
                <li>
                    <a
                        href="/bedrift"
                        className={
                            active === HeaderRoutes.BEDRIFT
                                ? "dsa-header-active"
                                : undefined
                        }
                    >
                        Bedrift
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PersonCompanyMenu;
