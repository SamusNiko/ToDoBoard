import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import TasksList from '../components/TasksList';
import { fetchOneProject } from "../http/taskApi";

const ProjectDetails = () => {
    const [project, setProject] = useState({});
    let { id } = useParams();

    useEffect(() => {
        fetchOneProject(id).then((data) => {
            setProject(data);
        });
    }, [id])

    return (
        <div className="block project-details-container">
            <div className="project-details-title">Project: <b>{project.name}</b></div>
            <div className="project-details-description">Description: {project.description}</div>
            <TasksList currentProject={id} priorityFilter={null} statusFilter={null} projectFilter={id} />
        </div>

    )
}

export default ProjectDetails;