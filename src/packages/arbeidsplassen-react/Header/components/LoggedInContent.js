import React from "react";
import { Button } from "@navikt/ds-react";
import { Buldings3Icon, PersonIcon } from "@navikt/aksel-icons";
import LoginButton from "./LoginButton.js";

function LoggedInContent({
  variant,
  authenticationStatus,
  onLogin,
  onLogout,
  className,
}) {
  return (
    <div className={`arb-header-user ${className}`}>
      {variant === "person" && authenticationStatus === "is-authenticated" && (
        <Button
          as="a"
          variant="tertiary"
          href="/min-side"
          icon={<PersonIcon aria-hidden="true" />}
        >
          Min side
        </Button>
      )}

      {variant === "company" && authenticationStatus === "is-authenticated" && (
        <Button
          as="a"
          variant="tertiary"
          href="/stillingsregistrering"
          icon={<Buldings3Icon aria-hidden="true" />}
        >
          Min bedriftsside
        </Button>
      )}

      <LoginButton
        authenticationStatus={authenticationStatus}
        handleLogInClick={onLogin}
        handleLogOutClick={onLogout}
      />
    </div>
  );
}

export default LoggedInContent;
