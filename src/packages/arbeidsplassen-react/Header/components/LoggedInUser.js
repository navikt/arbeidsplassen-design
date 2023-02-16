import React from "react";
import User from "./icons/User";
import Building from "./icons/Building";

function LoggedInUser({
  variant,
  userName,
  companyName,
  showChangeCompany,
  onChangeCompanyClick,
}) {
  return (
    <div className="arb-header-user">
      {variant === "person" && (
        <a href="/minside" className="arb-header-account">
          <User />
          {userName ? userName : "Min side"}
        </a>
      )}
      {variant === "company" && (
        <>
          {showChangeCompany && (
            <button
              type="button"
              onClick={onChangeCompanyClick}
              className="arb-header-change-company"
            >
              <Building /> Bytt bedrift
            </button>
          )}

          {companyName}
        </>
      )}
    </div>
  );
}

LoggedInUser.propTypes = {};

export default LoggedInUser;
