import React, { useContext, useState } from 'react';
import Board from '../components/Board';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';

const Boards = observer(() => {
    const { tasks } = useContext(Context);
    const [currentTask, setCurrentTask] = useState(null);

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