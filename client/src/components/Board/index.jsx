import React from 'react';
import "./style.css";
import BoardItem from '../BoardItem';

const Board = ({ boardName, items }) => {
    return (
        <div className="boardContainer">
            <h2 className="boarder-title">{boardName}</h2>
            {items.map((item, index) => {
                return (
                    <BoardItem key={item.itemId} itemCount={index} description={item.description} />
                )
            })}
        </div>
    )
};

export default Board;