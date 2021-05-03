import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../index.jsx';
import TaskItem from '../components/TaskItem';
import { fetchOneProject, fetchPriorities, fetchStatuses } from "../http/taskApi";

const ProjectDetails = () => {
    const [project, setProject] = useState({ tasks: [] });
    const { tasks } = useContext(Context)
    let { id } = useParams();
    useEffect(() => {
        fetchPriorities().then(data => tasks.setPriorities(data))
        fetchStatuses().then(data => tasks.setStatuses(data))
        fetchOneProject(id).then((data) => {
            setProject(data);
        });
    }, [id, tasks])

    return (
        <div className="block">
            <div>{project.name} {project.id}</div>
            <div>{project.description}</div>
            <div>
                {project.tasks.map((task) => {
                    return (
                        <TaskItem key={task.id} task={task} />
                    )
                })}
            </div>
        </div>

    )
}

export default ProjectDetails;