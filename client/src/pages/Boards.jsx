import React, { useContext, useState, useEffect } from 'react';
import Board from '../components/Board';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';
import { fetchTasks, updateTask } from '../http/taskApi';

const Boards = observer(() => {
    const { tasks } = useContext(Context);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetchTasks(null, null).then(data => {
            tasks.setTasks(data.rows)
            tasks.setTaskCount(data.count)
        })
    }, []);

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
        <div className="flex">
            {tasks._statuses.map((status) => {
                const filteredTasks = tasks._tasks.filter(({ statusId }) => {
                    return status.id === statusId;
                });
                return (
                    <Board
                        dragLeaveHandler={dragLeaveHandler}
                        dropHandler={dropHandler}
                        dragEndHandler={dragEndHandler}
                        dragStartHandler={dragStartHandler}
                        dragOverHandler={dragOverHandler}
                        key={status.id} board={status} items={filteredTasks} />
                )
            })}
        </div>
    )
})

export default Boards;