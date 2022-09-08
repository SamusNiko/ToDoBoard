import React, { useContext } from 'react';
import { Context } from '../../index';
import { setPriorityColor } from '../../utils/helper';
import "./style.css";

const BoardItem = ({ item, board, itemCount, dragStartHandler, dragOverHandler, dragLeaveHandler, dragEndHandler, dropHandler }) => {
    const { tasks } = useContext(Context);
    const timeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(item.deadLine);
    return (
        <div draggable={true} className="boardItem"
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, board)}
        >
            <div className="boardItem-container">
                <div className="boardItem-content">
                    <div>{item.name}</div>
                    <div><b>Deadline:</b> {item.deadLine ? date.toLocaleString('en-US', timeOptions) : '-'}</div>
                </div>
                <div className={setPriorityColor(item.priorityId) + " boardItem-priority"}>
                    {tasks.getPriorityName(item.priorityId)}
                </div>
            </div>
        </div>
    )
}

export default BoardItem