import { type MouseEventHandler } from "react";
import { Button } from "@navikt/ds-react";
import { EnterIcon, LeaveIcon } from "@navikt/aksel-icons";
import type { AuthenticationStatus } from "../types";

interface LoginButtonProps {
    authenticationStatus: AuthenticationStatus;
    handleLogOutClick: MouseEventHandler<HTMLButtonElement>;
    handleLogInClick: MouseEventHandler<HTMLButtonElement>;
}

export default function LoginButton({ authenticationStatus, handleLogOutClick, handleLogInClick }: LoginButtonProps) {
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
