import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import './style.css'

const CreateTaskFragment = ({ visible, closePopover }) => {
    const { tasks } = useContext(Context);
    const defaultTask = {
        id: tasks._taskCount,
        name: "",
        description: "",
        statusId: 1,
        priorityId: 1
    }

    const [newTask, setNewTask] = useState(defaultTask);

    const onTaskNameChange = (e) => {
        setNewTask({ ...newTask, name: e.target.value });
    }

    const onTaskDescriptionChange = (e) => {
        setNewTask({ ...newTask, description: e.target.value });
    }

    const onPriorityChange = (e) => {
        setNewTask({ ...newTask, priorityId: +e.target.value });
    }

    const onCancelClick = () => {
        setNewTask(defaultTask);
        closePopover();
    }

    const onSaveClick = () => {
        tasks.pushNewTask(newTask);
        onCancelClick();
    }

    return (
        <div style={visible ? { display: "block" } : { display: "none" }} className="crt-task-background">
            <div className="crt-task-container" >
                <p>Name</p>
                <input onChange={(e) => onTaskNameChange(e)} value={newTask.name} />
                <p>Description</p>
                <input onChange={(e) => onTaskDescriptionChange(e)} value={newTask.description} />
                <div>
                    <p>Priority</p>
                    <select onChange={(e) => onPriorityChange(e)} value={newTask.priorityId}>
                        {tasks._priorities.map((priority) => {
                            return (
                                <option key={priority.id} value={priority.id}>{priority.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button onClick={() => onSaveClick()}>Save</button>
                <button onClick={() => onCancelClick()}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateTaskFragment;
