import React from "react";
import classNames from "classnames";

function PersonMenu({ active }) {
    return (
        <ul>
            <li className="header-hide-on-desktop">
                <a href="/">Forside</a>
            </li>
            <li>
                <a href="/stillinger" className={classNames({ ["header-active"]: active === "stillinger" })}>
                    Ledige stillinger
                </a>
            </li>
            <li>
                <a href="/jobbtreff" className={classNames({ ["header-active"]: active === "jobbtreff" })}>
                    Jobbtreff
                </a>
            </li>
            <li>
                <a href="/cv" className={classNames({ ["header-active"]: active === "cv" })}>
                    CV
                </a>
            </li>
        </ul>
    );
}

PersonMenu.propTypes = {};

export default PersonMenu;
