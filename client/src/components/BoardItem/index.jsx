import React, { useContext } from 'react';
import { Context } from '../../index';
import { setPriorityColor } from '../../utils/helper';
import "./style.css";

const BoardItem = ({ item, board, itemCount, dragStartHandler, dragOverHandler, dragLeaveHandler, dragEndHandler, dropHandler }) => {
    const { tasks } = useContext(Context);
    const timeOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
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
<<<<<<< HEAD
                    <div className="boardItem-details"><b>Deadline:</b> {item.deadLine ? date.toLocaleString('en-US', timeOptions) : '-'}</div>
=======
                    <div><b>Deadline:</b> {item.deadLine ? date.toLocaleString('en-US', timeOptions) : '-'}</div>
>>>>>>> 5d4ad0967b61bdb82bdeea87b1f8b58a1bc85d97
                </div>
                <div className={setPriorityColor(item.priorityId) + " boardItem-priority"}>
                    {tasks.getPriorityName(item.priorityId)}
                </div>
            </div>
        </div>
    )
}

export default BoardItem