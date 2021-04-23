import React, { useContext, useState } from 'react';
import TaskItem from '../components/TaskItem';
import CreateTaskFragment from "../components/CreateTaskFragment";
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';

const TasksList = observer(() => {
    const { tasks } = useContext(Context);
    const [createTaskPopoverVisible, setPopoverVisible] = useState(false);

    const openCreateTaskPopover = (e) => {
        console.log("press")
        setPopoverVisible(true)
    }
    const closeCreateTaskPopover = (e) => {
        setPopoverVisible(false)
    }
    return (
        <div className="block">
            <div>
                <button onClick={(e) => openCreateTaskPopover(e)} className="crt-task-btn">Create Task</button>
                <CreateTaskFragment visible={createTaskPopoverVisible} closePopover={closeCreateTaskPopover}/>
            </div>
            {tasks._tasks.map((task) => {
                return (
                    <TaskItem key={task.id} task={task} />
                )
            })}
        </div>
    )
})

export default TasksList;