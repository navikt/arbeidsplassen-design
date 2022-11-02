import React from "react";
import UserIcon from "../Feather/UserIcon";
import EmployerIcon from "../Feather/EmployerIcon";
import { HeaderVariant } from "./Header";

function LoggedInUser({ variant, userName }) {
    return (
        <div className="dsa-header-user">
            {variant === HeaderVariant.PERSON && (
                <a href="/minside" className="dsa-header-account">
                    <UserIcon />
                    {userName ? userName : "Min side"}
                </a>
            )}
            {variant === HeaderVariant.COMPANY && (
                <a href="/bedrift/din-bedrift" className="dsa-header-account">
                    <EmployerIcon />
                    {userName ? userName : "Din bedrift"}
                </a>
            )}
        </div>
    );
}

LoggedInUser.propTypes = {};

export default LoggedInUser;
