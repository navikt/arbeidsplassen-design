import React from "react";
import classNames from "classnames";

function PersonOrCompany({ active }) {
    return (
        <div className="dsa-header-menu-both">
            <ul>
                <li>
                    <a href="/" className={classNames({ ["dsa-header-active"]: active === "person" })}>
                        Person
                    </a>
                </li>
                <li>
                    <a href="/bedrift" className={classNames({ ["dsa-header-active"]: active === "bedrift" })}>
                        Bedrift
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PersonOrCompany;
