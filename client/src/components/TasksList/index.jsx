import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TaskItem from '../TaskItem';
import CreateTaskFragment from "../CreateTaskFragment";
import { Context } from '../../index.jsx';
import { observer } from "mobx-react-lite";
import './style.css';
import { fetchPriorities, fetchStatuses, fetchTasks, createTask, updateTask, deleteTask, fetchProjects } from '../../http/taskApi';

const TasksList = observer(({ statusFilter, priorityFilter, projectFilter, currentProject }) => {
    const defaultTask = {
        name: "",
        description: "",
        statusId: 1,
        priorityId: 1,
        projectId: currentProject ? currentProject : 1,
        deadLine: new Date().toISOString() //Default tasks project
    }

    const { tasks } = useContext(Context);
    const location = useLocation();
    const [createTaskPopoverVisible, setPopoverVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState(defaultTask);

    useEffect(() => {
        fetchPriorities().then(data => tasks.setPriorities(data))
        fetchStatuses().then(data => tasks.setStatuses(data))
        fetchProjects().then(data => {
            tasks.setProjects(data.rows)
        })
    }, [tasks]);

    useEffect(() => {
        fetchTasks(statusFilter, priorityFilter, projectFilter).then(data => {
            tasks.setTasks(data.rows)
            tasks.setTaskCount(data.count)
        })
    }, [tasks, statusFilter, priorityFilter, projectFilter]);

    const openCreateTaskPopover = () => {
        setPopoverVisible(true)
    }

    const onEditTaskClick = (task) => {
        setCurrentTask({ ...task });
        setPopoverVisible(true);
    }

    const saveTask = async (task) => {
        if (task.id) {
            await updateTask(task);
        } else {
            await createTask(task);
        }
        fetchTasks(statusFilter, priorityFilter, projectFilter).then(data => {
            tasks.setTasks(data.rows)
            tasks.setTaskCount(data.count)
        });

    }

    const onDeleteTask = (task) => {
        deleteTask(task).then(() => {
            fetchTasks(statusFilter, priorityFilter, projectFilter).then(data => {
                tasks.setTasks(data.rows)
                tasks.setTaskCount(data.count)
            })
        });
    }

    const closeCreateTaskPopover = () => {
        setCurrentTask(defaultTask);
        setPopoverVisible(false);
    }

    return (
        <div className="block">
            <div className="flex">
                <button onClick={() => openCreateTaskPopover()} className="crt-task-btn">Create Task</button>
                <CreateTaskFragment currentProject={currentProject} currentTask={currentTask} saveTask={saveTask} setCurrentTask={setCurrentTask} visible={createTaskPopoverVisible} closePopover={closeCreateTaskPopover} />
            </div>
            <div className={location.pathname.match(/\w+/)[0] === 'tasks' ? 'tasks-container-list ' : 'tasks-container-project-details'}>

                {tasks._tasks.length ? tasks._tasks.map((task) => {
                    return (
                        <TaskItem onDeleteTask={onDeleteTask} onEditTaskClick={onEditTaskClick} key={task.id} task={task} />
                    )
                }) : <div className="not-task-text">You don't have any tasks</div>}
            </div>
        </div>
    )
})

export default TasksList;