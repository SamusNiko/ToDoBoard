import React from 'react';
import "./style.css";

const TaskItem = ({task}) => {
    return (
        <div className="flex task-container">
            <div>
                <p className="task-title">{task.name}</p>
                <p>{task.description}</p>
            </div>
            <div>
                <p>{task.statusId}</p>
                <p>{task.priorityId}</p>
            </div>
        </div>
    )
}
export default TaskItem;