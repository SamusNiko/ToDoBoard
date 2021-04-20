import React from 'react'
import { BOARDS_ROUTE, INFO_ROUTE, PROJECT_ROUTE, SETTINGS_ROUTE, TASKS_LIST_ROUTE } from '../../utils/const';
import { NavLink } from "react-router-dom"
import "./style.css"

const Menu = () => {
    return (
        <div className="menu-content">
            <NavLink className="menu-item" to={TASKS_LIST_ROUTE} >Tasks</NavLink>
            <NavLink className="menu-item" to={BOARDS_ROUTE} >Boards</NavLink>
            <NavLink className="menu-item" to={PROJECT_ROUTE} >Projects</NavLink>
            <NavLink className="menu-item" to={SETTINGS_ROUTE} >Settings</NavLink>
            <NavLink className="menu-item" to={INFO_ROUTE} >Info</NavLink>
        </div>
    )
}

export default Menu;