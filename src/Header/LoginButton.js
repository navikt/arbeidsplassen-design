import React from "react";
import Button from "../Button/Button";
import LogOutIcon from "../Feather/LogOutIcon";
import LogInIcon from "../Feather/LogInIcon";

function LoginButton({ authenticationStatus, handleLogOutClick, handleLogInClick }) {
    if (authenticationStatus === "IS_AUTHENTICATED") {
        return (
            <Button
                variant="secondary"
                onClick={handleLogOutClick}
                icon={<LogOutIcon />}
                className="dsa-header-login-button"
            >
                Logg ut
            </Button>
        );
    } else if (authenticationStatus === "NOT_AUTHENTICATED") {
        return (
            <Button
                variant="secondary"
                onClick={handleLogInClick}
                icon={<LogInIcon />}
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
