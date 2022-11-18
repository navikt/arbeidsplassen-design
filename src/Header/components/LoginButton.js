import React from "react";
import Button from "../../Button/Button";
import LogOut from "../../Feather/LogOut";
import LogIn from "../../Feather/LogIn";

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
                className="dsa-header-login-button"
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
