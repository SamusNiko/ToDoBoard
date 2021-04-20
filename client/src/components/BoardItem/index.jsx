import React from 'react';
import "./style.css";

const BoardItem = ({ name, itemCount }) => {
    return (
        <div className="boardItem">
            {itemCount + 1}. {name}
        </div>
    )
}

export default BoardItem