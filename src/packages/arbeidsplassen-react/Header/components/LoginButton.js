import React from "react";
import { Button } from "@navikt/ds-react";
import { EnterIcon, LeaveIcon } from "@navikt/aksel-icons";

function LoginButton({ authenticationStatus, handleLogOutClick, handleLogInClick }) {
    if (authenticationStatus === "is-authenticated") {
        return (
            <Button
                variant="secondary"
                onClick={handleLogOutClick}
                icon={<LeaveIcon aria-hidden="true" />}
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
                icon={<EnterIcon aria-hidden="true" />}
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
