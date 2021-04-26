import React, { useContext, useState } from 'react';
import TaskItem from '../components/TaskItem';
import CreateTaskFragment from "../components/CreateTaskFragment";
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';

const TasksList = observer(() => {
    const defaultTask = {
        name: "",
        description: "",
        statusId: 1,
        priorityId: 1
    }
    const { tasks } = useContext(Context);
    const [createTaskPopoverVisible, setPopoverVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState(defaultTask);


    const openCreateTaskPopover = () => {
        setPopoverVisible(true)
    }
    const onEditTaskClick = (task) => {
        setCurrentTask({ ...task });
        setPopoverVisible(true);
    }
    const closeCreateTaskPopover = () => {
        setCurrentTask(defaultTask);
        setPopoverVisible(false);
    }
    return (
        <div className="block">
            <div>
                <button onClick={() => openCreateTaskPopover()} className="crt-task-btn">Create Task</button>
                <CreateTaskFragment currentTask={currentTask} setCurrentTask={setCurrentTask} visible={createTaskPopoverVisible} closePopover={closeCreateTaskPopover} />
            </div>
            {tasks._tasks.map((task) => {
                return (
                    <TaskItem onEditTaskClick={onEditTaskClick} key={task.id} task={task} />
                )
            })}
        </div>
    )
})

export default TasksList;