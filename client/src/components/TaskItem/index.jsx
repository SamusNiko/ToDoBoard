import React, { useContext } from 'react';
import { Context } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMarker } from '@fortawesome/free-solid-svg-icons'
import { setPriorityColor, setStatusColor } from '../../utils/helper';
import "./style.css";

const TaskItem = ({ task, onEditTaskClick, onDeleteTask }) => {
    const { tasks } = useContext(Context);

    const onDeleteTaskClick = (task) => {
        onDeleteTask(task)
    }
    const timeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(task.deadLine);

    return (
        <div className="flex task-container">
            <div className="task-description">
                <p className="task-title">{task.name}</p>
                <p>{task.description}</p>
                <div><b>Deadline:</b> {task.deadLine ? date.toLocaleString('en-US', timeOptions) : '-'}</div>
            </div>
            <div className="task-status-container">
                <p className={setStatusColor(task.statusId) + " task-status"} >{tasks.getStatusName(task.statusId)}</p>
                <p className={setPriorityColor(task.priorityId) + " task-priority"}>{tasks.getPriorityName(task.priorityId)}</p>
            </div>
            <div className="task-buttons-container">
                <button onClick={() => onDeleteTaskClick(task)} className="task-delete-btn"><FontAwesomeIcon icon={faTimes} /></button>
                <button onClick={() => onEditTaskClick(task)} className="task-edit-btn"><FontAwesomeIcon icon={faMarker} /></button>
            </div>
        </div>
    )
}

export default TaskItem;