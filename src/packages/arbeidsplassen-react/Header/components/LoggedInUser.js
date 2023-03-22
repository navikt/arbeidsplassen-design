import React from "react";
import { Button } from "@navikt/ds-react";
import { Buldings3Icon, CogIcon } from "@navikt/aksel-icons";

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
            <CogIcon aria-hidden="true" width="1.5em" height="1.5em" />
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
              icon={<Buldings3Icon aria-hidden="true" />}
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
