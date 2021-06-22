import React from 'react';
import "./style.css";
import BoardItem from '../BoardItem';
import { observer } from "mobx-react-lite";

const Board = observer(({ items, board, dragLeaveHandler, dropHandler, dragEndHandler, dragStartHandler, dragOverHandler }) => {


    return (
        <div className="boardContainer"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, board)}
            onDragLeave={(e) => dragLeaveHandler(e)}
        >
            {/* <h2 className="boarder-title">{board.name}</h2> */}
            {items.map((item, index) => {
                return (
                    <BoardItem
                        dragLeaveHandler={dragLeaveHandler}
                        dropHandler={dropHandler}
                        dragEndHandler={dragEndHandler}
                        dragStartHandler={dragStartHandler}
                        dragOverHandler={dragOverHandler}
                        item={item}
                        board={board}
                        key={item.id}
                        itemCount={index} />
                )
            })}
        </div>
    )
});

export default Board;