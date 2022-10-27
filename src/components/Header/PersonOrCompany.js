import React from "react";
import classNames from "classnames";

function PersonOrCompany({ active }) {
    return (
        <div className="header-menu-both">
            <ul>
                <li>
                    <a href="/" className={classNames({ ["header-active"]: active === "person" })}>
                        Person
                    </a>
                </li>
                <li>
                    <a href="/bedrift" className={classNames({ ["header-active"]: active === "bedrift" })}>
                        Bedrift
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PersonOrCompany;
