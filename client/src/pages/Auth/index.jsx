import React, { useContext } from 'react';
import { Context } from '../../index.jsx';
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from '../../utils/const';
import './style.css';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const onLogInClick = () => {
        user.setIsAuth(true);
    }

    return (
        <div>
            <p>
                Auth
            </p>
            <button onClick={onLogInClick}>Log In</button>
            <button><NavLink to={REGISTRATION_ROUTE}>Registration</NavLink></button>
        </div>
    )
})

export default Auth;