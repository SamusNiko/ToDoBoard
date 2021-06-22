import React, { useContext, useState, useEffect } from 'react';
import Board from '../components/Board';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';
import { fetchTasks, fetchPriorities, fetchStatuses, fetchProjects, updateTask } from '../http/taskApi';

const Boards = observer(() => {
    const { tasks } = useContext(Context);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetchProjects(true).then(data => {
            tasks.setProjects(data.rows)
        });
        fetchPriorities().then(data => tasks.setPriorities(data))
        fetchStatuses().then(data => tasks.setStatuses(data))
    }, [tasks]);

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.boxShadow = '0 2px 3px gray';
    }

    function dragStartHandler(e, item) {
        setCurrentTask(item);
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none';
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none';
    }

    function dropHandler(e, board) {
        e.preventDefault();
        e.target.style.boxShadow = 'none';
        if (currentTask.statusId !== board.id) {
            currentTask.statusId = board.id
            updateTask(currentTask).then(() => {
                fetchTasks(null, null).then(data => {
                    tasks.setTasks(data.rows)
                    tasks.setTaskCount(data.count)
                });
            })
        }
    }

    return (
        <div className="boards">
            <div className="flex">
                {tasks._statuses.map((status) =>
                    <h2 className="board-title" key={status.name}>{status.name}</h2>
                )}
            </div>
            <div>
                {tasks._projects.map((project) => {
                    if (project.tasks && project.tasks.length) {
                        return (
                            <div key={`${project.id}` + "board"}>
                                <h2>{project.name}</h2>
                                <div className="flex">
                                    {
                                        tasks._statuses.map((status) => {
                                            const filteredTasks = project.tasks.filter(({ statusId }) => {
                                                return status.id === statusId;
                                            });
                                            return (
                                                <Board key={`${project.id + status.name}`}
                                                    dragLeaveHandler={dragLeaveHandler}
                                                    dropHandler={dropHandler}
                                                    dragEndHandler={dragEndHandler}
                                                    dragStartHandler={dragStartHandler}
                                                    dragOverHandler={dragOverHandler}
                                                    board={status} items={filteredTasks} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                })}
            </div >
        </div >
    )
})

export default Boards;