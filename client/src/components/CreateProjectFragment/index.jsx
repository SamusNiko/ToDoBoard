import React, { useState } from 'react'
import './style.css'

const CreateProject = ({ visible, setPopoverVisible }) => {
    const defaultNewTask = {
        name: "",
        description: ""
    }

    const [newProject, setNewProject] = useState(defaultNewTask)
    const onSaveClick = () => {
        console.log("New project was saved", newProject);
        setNewProject(defaultNewTask);
        setPopoverVisible(false);
    }

    const onCancelClick = () => {
        setNewProject(defaultNewTask);
        setPopoverVisible(false);
    }

    const onInputChange = (e, propName) => {
        setNewProject({ ...newProject, [propName]: e.target.value });
    }

    return (
        < div style={visible ? { display: "block" } : { display: "none" }} className="crt-project-background">
            <div className="crt-project-container">
                <p>Name:</p>
                <input value={newProject.name} onChange={(e) => onInputChange(e, "name")} />
                <p>Description:</p>
                <input value={newProject.description} onChange={(e) => onInputChange(e, "description")} />
                <div>
                    <button onClick={() => onSaveClick()}>Save</button>
                    <button onClick={() => onCancelClick()}>Cancel</button>
                </div>
            </div>
        </div >
    )
}

export default CreateProject;