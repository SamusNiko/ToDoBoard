import React from 'react';
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { AUTH_ROUTE, } from '../../utils/const';
import './style.css';

const Registration = observer(() => {

    return (
        <div >
            Registration
            <button><NavLink to={AUTH_ROUTE}>Cancel</NavLink></button>
        </div >
    )
})

export default Registration;