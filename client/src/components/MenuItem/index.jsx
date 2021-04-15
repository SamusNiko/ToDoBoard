import React from 'react'
import "./style.css"

const MenuItem = ({ itemName }) => {
    return (
        <div className="menu-item">
            {itemName}
        </div>
    )
}

export default MenuItem;