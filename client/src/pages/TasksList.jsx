import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem'
import { Context } from '../index.jsx';
import './styles/style.css';

const TasksList = () => {
    const { tasks } = useContext(Context);
    return (
        <div className="block">
            {tasks._tasks.map((task) => {
                return (
                    <TaskItem key={task.id} task={task} />
                )
            })}
        </div>
    )
}

export default TasksList;