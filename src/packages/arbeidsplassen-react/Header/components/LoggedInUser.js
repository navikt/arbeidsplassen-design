import React from "react";
import { Button } from "@navikt/ds-react";
import { Settings, Office1 } from "@navikt/ds-icons";

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
        <>
          <a href="/personinnstillinger" className="arb-header-account">
            <Settings aria-hidden="true" title="Innstillinger" />
            Innstillinger
          </a>
          {userName}
        </>
      )}
      {variant === "company" && (
        <>
          {showChangeCompany && (
            <Button
              variant="tertiary"
              type="button"
              onClick={onChangeCompanyClick}
              icon={<Office1 />}
            >
              Bytt bedrift
            </Button>
          )}

          {companyName}
        </>
      )}
    </div>
  );
}

LoggedInUser.propTypes = {};

export default LoggedInUser;
