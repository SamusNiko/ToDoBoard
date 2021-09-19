import React, { useContext, useEffect } from 'react';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';
import { fetchPriorities, fetchStatuses, fetchProjects } from '../http/taskApi';
import BoardProject from '../components/BoardProject';

const Boards = observer(() => {
    const { tasks } = useContext(Context);

    useEffect(() => {
        fetchProjects(true).then(data => {
            tasks.setProjects(data.rows)
        });
        fetchPriorities().then(data => tasks.setPriorities(data))
        fetchStatuses().then(data => tasks.setStatuses(data))
    }, [tasks]);

    return (
        <div className="boards">
            <div className="flex board-headers">
                {tasks._statuses.map((status) =>
                    <h2 className="board-title" key={status.name}>{status.name}</h2>
                )}
            </div>
            <div className="boards-container">
                {tasks._projects.map((project) => {
                    if (project.tasks && project.tasks.length) {
                        return (
                            <BoardProject key={`${project.id}board`} project={project} statuses={tasks._statuses} />
                        )
                    } else {
                        return "";
                    }
                })}
            </div >
        </div >
    )
})

export default Boards;