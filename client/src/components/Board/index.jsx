import React from 'react';
import "./style.css";
import BoardItem from '../BoardItem';
import { observer } from "mobx-react-lite";

const Board = observer(({ items, boardName }) => {
    return (
        <div className="boardContainer">
            <h2 className="boarder-title">{boardName}</h2>
            {items.map((item, index) => {
                return (
                    <BoardItem key={item.id} itemCount={index} name={item.name} />
                )
            })}
        </div>
    )
});

export default Board;