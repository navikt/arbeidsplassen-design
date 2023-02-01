import React from "react";
import User from "./icons/User";
import Building from "./icons/Building";

function LoggedInUser({ variant, userName, companyName }) {
  return (
    <div className="dsa-header-user">
      {variant === "person" && (
        <a href="/minside" className="dsa-header-account">
          <User />
          {userName ? userName : "Min side"}
        </a>
      )}
      {variant === "company" && (
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
