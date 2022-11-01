import React from "react";
import Button from "../Button/Button";
import LogOutIcon from "../Feather/LogOutIcon";
import LogInIcon from "../Feather/LogInIcon";

function LoginButton({ authenticationStatus, handleLogOutClick, handleLogInClick }) {
    if (authenticationStatus === "UNKNOWN") {
        return <div />;
    }

    return (
        <>
            {authenticationStatus === "IS_AUTHENTICATED" ? (
                <Button
                    variant="secondary"
                    onClick={handleLogOutClick}
                    icon={<LogOutIcon />}
                    className="dsa-header-login-button"
                >
                    Logg ut
                </Button>
            ) : (
                <Button
                    variant="secondary"
                    onClick={handleLogInClick}
                    icon={<LogInIcon />}
                    className="dsa-header-logout-button"
                >
                    Logg inn
                </Button>
            )}
        </>
    );
}

export default LoginButton;
