import React, { useContext, useState } from 'react';
import { Context } from '../../index.jsx';
import { observer } from "mobx-react-lite";
import { useHistory, NavLink } from "react-router-dom";
import { AUTH_ROUTE } from '../../utils/const';
import './style.css';

const Registration = observer(() => {
    const { myUser } = useContext(Context);
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");

    const onRegisterClick = () => {
        myUser.registration(email, password);
    }

    const onGoToLogInClick = () => {
        history.push(AUTH_ROUTE);
    }

    return (
        <div className='auth-container'>
            <p className='auth-title_container'>
                REGISTRATION
            </p>
            <input className='auth-input'
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input className='auth-input'
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />
            <input className='auth-input'
                onChange={e => setRepeatPassword(e.target.value)}
                value={repeatPassword}
                type="password"
                placeholder='Repeat Password'
            />
            <button className='auth-btn' onClick={onRegisterClick}>Register</button>
            <button className='auth-btn' onClick={onGoToLogInClick}>Go to Log In</button>
        </div>
    )
})

export default Registration;