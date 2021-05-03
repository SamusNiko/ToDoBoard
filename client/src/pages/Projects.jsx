import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../index.jsx';
import { fetchProjects } from '../http/taskApi';
import { NavLink } from "react-router-dom"
import './styles/style.css';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PROJECT_ROUTE } from '../utils/const.js';
import CreateProject from '../components/CreateProjectFragment/index.jsx';

const Projects = observer(() => {
    const { tasks } = useContext(Context)
    const [createProjectVisible, setCreateProjectVisible] = useState(false)
    useEffect(() => {
        fetchProjects().then((data) => tasks.setProjects(data.rows));

    }, [tasks]);

    const openCreateProjectPopover = () => {
        setCreateProjectVisible(true);
    }
    return (
        <div className="project-page flex">
            {tasks._projects.map((project) => {
                return (
                    <NavLink key={project.id} to={PROJECT_ROUTE + `/${project.id}`} className="project-tile">
                        <h3>
                            {project.name}
                        </h3>
                    </NavLink>

                )
            })}
            <div key="addProjectBtn" onClick={() => openCreateProjectPopover()} className="project-tile add-proj-btn">
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <CreateProject visible={createProjectVisible} setPopoverVisible={setCreateProjectVisible} />
        </div >
    )
})

export default Projects;