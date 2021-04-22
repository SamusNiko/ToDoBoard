import React from 'react';
import "./style.css";

const BoardItem = ({ item, board, itemCount, dragStartHandler, dragOverHandler, dragLeaveHandler, dragEndHandler, dropHandler }) => {

    return (
        <div draggable={true} className="boardItem"
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, board)}
        >
            {itemCount + 1}. {item.name}
        </div>
    )
    //empty comment 1
}

export default BoardItem