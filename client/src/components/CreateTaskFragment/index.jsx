import React, { useContext } from 'react';
import { Context } from '../../index';
import './style.css'

const CreateTaskFragment = ({ visible, closePopover, currentTask, setCurrentTask, saveTask }) => {
    const { tasks } = useContext(Context);

    const onInputChange = (e, propName) => {
        setCurrentTask({ ...currentTask, [propName]: e.target.value });
    }

    const onPriorityChange = (e) => {
        setCurrentTask({ ...currentTask, priorityId: +e.target.value });
    }

    const onProjectChange = (e) => {
        setCurrentTask({ ...currentTask, projectId: +e.target.value });
    }

    const onSaveClick = () => {
        saveTask(currentTask);
        closePopover();
    }

    const onCancelClick = () => {
        closePopover();
    }


    return (
        <div style={visible ? { display: "block" } : { display: "none" }} className="crt-task-background">
            <div className="crt-task-container" >
                <div>
                    <p>Project</p>
                    <select onChange={(e) => onProjectChange(e)} value={currentTask.projectId}>
                        {tasks._projects.map((project) => {
                            return (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            )
                        })}
                    </select>
                </div>
                <p>Name</p>
                <input onChange={(e) => onInputChange(e, "name")} value={currentTask.name} />
                <p>Description</p>
                <textarea onChange={(e) => onInputChange(e, "description")} value={currentTask.description} />
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
