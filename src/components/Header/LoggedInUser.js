import React from "react";
import UserIcon from "../Feather/UserIcon";
import EmployerIcon from "../Feather/EmployerIcon";

function LoggedInUser({ menu, userNameAndInfo }) {
    return (
        <div className="dsa-header-user">
            {menu === "person" && (
                <a href="/minside" className="dsa-header-account">
                    <UserIcon />
                    {userNameAndInfo?.fornavn && userNameAndInfo?.etternavn ? (
                        <>
                            {userNameAndInfo.fornavn} {userNameAndInfo.etternavn}
                        </>
                    ) : (
                        <>Min side</>
                    )}
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
