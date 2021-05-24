import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../index.jsx';
import { fetchProjects, createProject, deleteProject } from '../http/taskApi';
import { NavLink } from "react-router-dom"
import './styles/style.css';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PROJECT_ROUTE } from '../utils/const.js';
import CreateProject from '../components/CreateProjectFragment/index.jsx';
import DeletePopover from '../components/DeletePopover/index.jsx';

const Projects = observer(() => {
    const { tasks } = useContext(Context)
    const [createProjectVisible, setCreateProjectVisible] = useState(false)
    const [deleteProjectVisible, setDeleteProjectVisible] = useState(false)
    const [deletedProject, setDeletedProject] = useState({})
    useEffect(() => {
        fetchProjects().then((data) => tasks.setProjects(data.rows));
    }, [tasks]);

    const onSaveProject = (project) => {
        createProject(project).then(() => {
            fetchProjects().then(data => {
                tasks.setProjects(data.rows)
            });
        });
    }

    const onDeleteProject = (e, project) => {
        e.preventDefault()
        e.stopPropagation();
        setDeletedProject(project);
        setDeleteProjectVisible(true);
    }

    const handleDeleteProject = (project) => {
        setDeleteProjectVisible(false);
        setDeletedProject({});
        deleteProject(project).then(() => {
            fetchProjects().then(data => {
                tasks.setProjects(data.rows)
            });
        });
    }

    const openCreateProjectPopover = () => {
        setCreateProjectVisible(true);
    }
    return (
        <div className="project-page flex">
            {tasks._projects.map((project) => {
                return (
                    <NavLink key={project.id} to={PROJECT_ROUTE + `/${project.id}`} className="project-tile">
                        <div className="project-tile-content">
                            <h3>
                                {project.name}
                            </h3>
                            <button onClick={(e) => onDeleteProject(e, project)} className="task-delete-btn"><FontAwesomeIcon icon={faTimes} /></button>
                        </div>

                    </NavLink>

                )
            })}
            <div key="addProjectBtn" onClick={() => openCreateProjectPopover()} className="project-tile add-proj-btn">
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <CreateProject visible={createProjectVisible} setPopoverVisible={setCreateProjectVisible} saveProject={onSaveProject} />
            <DeletePopover visible={deleteProjectVisible}
                setPopoverVisible={setDeleteProjectVisible}
                text={`Do you really want deleted project ${deletedProject.name} and related tasks?`}
                callBack={() => handleDeleteProject(deletedProject)} />
        </div >
    )
})

export default Projects;