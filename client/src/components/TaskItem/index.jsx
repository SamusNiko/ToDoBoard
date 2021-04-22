import React, { useContext } from 'react';
import { Context } from '../../index';
import { setPriorityColor, setStatusColor } from '../../utils/helper';
import "./style.css";

const TaskItem = ({ task }) => {
    const { tasks } = useContext(Context);

    return (
        <div className="flex task-container">
            <div>
                <p className="task-title">{task.name}</p>
                <p>{task.description}</p>
            </div>
            <div className="task-status-container">
                <p className={setStatusColor(task.statusId) + " task-status"} >{tasks.getStatusName(task.statusId)}</p>
                <p className={setPriorityColor(task.priorityId) + " task-priority"}>{tasks.getPriorityName(task.priorityId)}</p>
            </div>
        </div>
    )
}
export default TaskItem;