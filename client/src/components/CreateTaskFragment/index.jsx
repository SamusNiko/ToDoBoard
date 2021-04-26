import React, { useContext } from 'react';
import { Context } from '../../index';
import './style.css'

const CreateTaskFragment = ({ visible, closePopover, currentTask, setCurrentTask }) => {
    const { tasks } = useContext(Context);

    const onInputChange = (e, propName) => {
        setCurrentTask({ ...currentTask, [propName]: e.target.value });
    }

    const onPriorityChange = (e) => {
        setCurrentTask({ ...currentTask, priorityId: +e.target.value });
    }

    const onCancelClick = () => {
        closePopover();
    }

    const onSaveClick = () => {
        if (currentTask.id) {
            tasks.updateTask(currentTask);
        } else {
            tasks.pushNewTask(currentTask);
        }
        onCancelClick();
    }

    return (
        <div style={visible ? { display: "block" } : { display: "none" }} className="crt-task-background">
            <div className="crt-task-container" >
                <p>Name</p>
                <input onChange={(e) => onInputChange(e, "name")} value={currentTask.name} />
                <p>Description</p>
                <input onChange={(e) => onInputChange(e, "description")} value={currentTask.description} />
                <div>
                    <p>Priority</p>
                    <select onChange={(e) => onPriorityChange(e)} value={currentTask.priorityId}>
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
