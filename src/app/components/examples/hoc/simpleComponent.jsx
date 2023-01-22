import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";
import Divider from "../../common/divider";

const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return (
        <>
            <Subtitle>SimpleComponent</Subtitle>
            <Divider />
            {!isAuth ? (
                <button className="btn btn-primary" onClick={onLogIn}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    name: PropTypes.string,
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
