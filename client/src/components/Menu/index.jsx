import React from 'react'
import MenuItem from "../MenuItem";
import "./style.css"

const Menu = () => {
    return (
        <div className="menu-content">
            <MenuItem itemName={"Boards"}/>
            <MenuItem itemName={"Projects"}/>
            <MenuItem itemName={"Settings"}/>
            <MenuItem itemName={"Info"}/>
        </div>
    )
}

export default Menu;