import React, { useContext } from 'react';
import { Context } from '../../index';
import './style.css'

const CreateTaskFragment = ({ visible, closePopover, currentProject, currentTask, setCurrentTask, saveTask }) => {
    const { tasks } = useContext(Context);

    const onInputChange = (e, propName) => {
        setCurrentTask({ ...currentTask, [propName]: e.target.value });
    }

    const onDeadlineChange = (e) => {
        console.log(e.target.value)
        setCurrentTask({ ...currentTask, deadLine: e.target.value })
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
                    <select className="crt-task-status" onChange={(e) => onProjectChange(e)} value={currentProject ? currentProject : currentTask.projectId} disabled={!!currentProject}>
                        {tasks._projects.map((project) => {
                            return (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            )
                        })}
                    </select>
                </div>
                <p>Name</p>
                <input className="crt-task-name" onChange={(e) => onInputChange(e, "name")} value={currentTask.name} />
                <p>Description</p>
                <textarea className="crt-task-description" onChange={(e) => onInputChange(e, "description")} value={currentTask.description} />
                <p>Deadline</p>
                <input id="datetime" className="crt-task-date" onChange={(e) => onDeadlineChange(e)} type="date" value={currentTask.deadLine} />
                <div>
                    <p>Priority</p>
                    <select className="crt-task-status" onChange={(e) => onPriorityChange(e)} value={currentTask.priorityId}>
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
