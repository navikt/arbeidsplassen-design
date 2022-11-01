import React from "react";
import UserIcon from "../Feather/UserIcon";
import EmployerIcon from "../Feather/EmployerIcon";

function LoggedInUser({ menu, userName }) {
    return (
        <div className="dsa-header-user">
            {menu === "person" && (
                <a href="/minside" className="dsa-header-account">
                    <UserIcon />
                    {userName ? userName : "Min side"}
                </a>
            )}
            {menu === "bedrift" && (
                <a href="/bedrift/din-bedrift" className="dsa-header-account">
                    <EmployerIcon />
                    Din bedrift
                </a>
            )}
        </div>
    );
}

LoggedInUser.propTypes = {};

export default LoggedInUser;