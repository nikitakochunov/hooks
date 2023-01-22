import React from "react";
import CardWrapper from "../../common/Card";

const AUTH_KEY = "auth";
const AUTH_VALUE = "token";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem(AUTH_KEY) === AUTH_VALUE;
    const handleLogIn = () => {
        localStorage.setItem(AUTH_KEY, AUTH_VALUE);
    };
    const handleLogOut = () => {
        localStorage.removeItem(AUTH_KEY);
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
