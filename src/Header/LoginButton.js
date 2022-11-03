import React from "react";
import Button from "../Button/Button";
import LogOut from "../Feather/LogOut";
import LogIn from "../Feather/LogIn";
import { HeaderAuthenticationStatus } from "./Header";

function LoginButton({
    authenticationStatus,
    handleLogOutClick,
    handleLogInClick,
}) {
    if (authenticationStatus === HeaderAuthenticationStatus.IS_AUTHENTICATED) {
        return (
            <Button
                variant="secondary"
                onClick={handleLogOutClick}
                icon={<LogOut />}
                className="dsa-header-login-button"
            >
                Logg ut
            </Button>
        );
    } else if (
        authenticationStatus === HeaderAuthenticationStatus.NOT_AUTHENTICATED
    ) {
        return (
            <Button
                variant="secondary"
                onClick={handleLogInClick}
                icon={<LogIn />}
                className="dsa-header-logout-button"
            >
                Logg inn
            </Button>
        );
    } else {
        return <div />;
    }
}

export default LoginButton;
