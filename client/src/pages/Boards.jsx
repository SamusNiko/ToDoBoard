import React, { useContext, useEffect } from 'react';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';
import { fetchPriorities, fetchStatuses, fetchProjects } from '../http/taskApi';
import BoardProject from '../components/BoardProject';
import TaskOverviewSection from '../components/TaskOverviewSection';

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
<<<<<<< HEAD
        <div className="flex">
            <div className="boards">
                <div className="flex board-headers">
                    {tasks._statuses.map((status) =>
                        <p className={`board-title board-title-${status.id}`} key={status.name}>{status.name}</p>
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
=======
        <div className="boards">
            <div className="flex board-headers">
                {tasks._statuses.map((status) =>
                    <p className={`board-title board-title-${status.id}`} key={status.name}>{status.name}</p>
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
>>>>>>> 5d4ad0967b61bdb82bdeea87b1f8b58a1bc85d97
            </div >
            {/* <TaskOverviewSection /> */}
        </div>
    )
})

export default Boards;