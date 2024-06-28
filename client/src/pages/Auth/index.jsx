import React, { useContext, useState} from 'react';
import { Context } from '../../index.jsx';
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { REGISTRATION_ROUTE } from '../../utils/const';
import './style.css';

const Auth = observer(() => {
    const { myUser } = useContext(Context);
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onLogInClick = () => {
        myUser.login(email, password);
    }

    const onRegistrationClick = () =>{
        history.push(REGISTRATION_ROUTE);
    }

    return (
        <div className='auth-container'>
            <p className='auth-title_container'>
                SIGN IN
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
            <button className='auth-btn' onClick={onLogInClick}>Sign In</button>
            <button className='auth-btn' onClick={onRegistrationClick}>Register now</button>
        </div>
    )
})

export default Auth;