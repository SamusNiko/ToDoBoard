import React, { useContext } from 'react';
import Board from '../components/Board';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';

const Boards = observer(() => {
    const { tasks } = useContext(Context);
    console.log(tasks);
    return (
        <div className="flex">
            {tasks._statuses.map((status) => {
                const filteredTasks = tasks._tasks.filter(({ statusId }) => {
                    return status.id === statusId;
                });
                return (
                    <Board key={status.id} boardName={status.name} items={filteredTasks} />
                )
            })}
        </div>
    )
})

export default Boards;