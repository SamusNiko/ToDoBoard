import React from 'react'
import { BOARDS_ROUTE, INFO_ROUTE, PROJECT_ROUTE, SETTINGS_ROUTE, TASKS_LIST_ROUTE } from '../../utils/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faTasks, faCog, faQuestionCircle, faPaste} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
import "./style.css"

const Menu = () => {
    return (
        <div className="menu-container">
            <NavLink className="menu-item" activeClassName="menu-item-active" to={TASKS_LIST_ROUTE} ><FontAwesomeIcon icon={faTasks} /> Tasks</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-active" to={BOARDS_ROUTE} ><FontAwesomeIcon icon={faColumns} /> Boards</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-active" to={PROJECT_ROUTE} ><FontAwesomeIcon icon={faPaste} /> Projects</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-active" to={SETTINGS_ROUTE} ><FontAwesomeIcon icon={faCog} /> Settings</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-active" to={INFO_ROUTE} ><FontAwesomeIcon icon={faQuestionCircle} /> Info</NavLink>
        </div>
    )
}

export default Menu;