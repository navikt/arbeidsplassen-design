import React from "react";
import User from "../../Feather/User";
import Building from "../../Feather/Building";
import { HeaderVariant } from "../Header";

function LoggedInUser({ variant, userName, companyName }) {
    return (
        <div className="dsa-header-user">
            {variant === HeaderVariant.PERSON && (
                <a href="/minside" className="dsa-header-account">
                    <User />
                    {userName ? userName : "Min side"}
                </a>
            )}
            {variant === HeaderVariant.COMPANY && (
                <a href="/bedrift/din-bedrift" className="dsa-header-account">
                    <Building />
                    {companyName ? companyName : "Din bedrift"}
                </a>
            )}
        </div>
    );
}

LoggedInUser.propTypes = {};

export default LoggedInUser;
