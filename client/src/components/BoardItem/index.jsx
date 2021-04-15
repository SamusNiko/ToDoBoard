import React from 'react';
import "./style.css";

const BoardItem = ({ description, itemCount }) => {
    return (
        <div className="boardItem">
            {itemCount + 1}. {description}
        </div>
    )
}

export default BoardItem