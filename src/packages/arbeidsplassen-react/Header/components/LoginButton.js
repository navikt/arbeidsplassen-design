import React from "react";
import LogOut from "./icons/LogOut";
import LogIn from "./icons/LogIn";
import { Button } from "@navikt/ds-react";

function LoginButton({
  authenticationStatus,
  handleLogOutClick,
  handleLogInClick,
}) {
  if (authenticationStatus === "is-authenticated") {
    return (
      <Button
        variant="secondary"
        onClick={handleLogOutClick}
        icon={<LogOut />}
        className="arb-header-login-button"
      >
        Logg ut
      </Button>
    );
  } else if (authenticationStatus === "not-authenticated") {
    return (
      <Button
        variant="secondary"
        onClick={handleLogInClick}
        icon={<LogIn />}
        className="arb-header-logout-button"
      >
        Logg inn
      </Button>
    );
  } else {
    return <div />;
  }
}

export default LoginButton;
