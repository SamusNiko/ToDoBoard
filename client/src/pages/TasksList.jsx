import React, { useContext, useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import CreateTaskFragment from "../components/CreateTaskFragment";
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';
import { fetchPriorities, fetchStatuses, fetchTasks, createTask, updateTask, deleteTask, fetchProjects } from '../http/taskApi';

const TasksList = observer(() => {
    const defaultTask = {
        name: "",
        description: "",
        statusId: 1,
        priorityId: 1,
        projectId: 2 //Default tasks project
    }
    const { tasks } = useContext(Context);
    const [priorityFilter, setPriorityFilter] = useState(0);
    const [statusFilter, setStatusFilter] = useState(0);
    const [projectFilter, setProjectFilter] = useState(0);
    const [createTaskPopoverVisible, setPopoverVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState(defaultTask);

    useEffect(() => {
        fetchPriorities().then(data => tasks.setPriorities(data))
        fetchStatuses().then(data => tasks.setStatuses(data))
        fetchProjects().then(data => tasks.setProjects(data.rows))
        fetchTasks(null, null).then(data => {
            tasks.setTasks(data.rows)
            tasks.setTaskCount(data.count)
        })
    }, [tasks])

    useEffect(() => {
        fetchTasks(statusFilter, priorityFilter, projectFilter).then(data => {
            tasks.setTasks(data.rows)
            tasks.setTaskCount(data.count)
        })
    }, [tasks, priorityFilter, statusFilter, projectFilter]);

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
            fetchTasks(statusFilter, priorityFilter).then(data => {
                tasks.setTasks(data.rows)
                tasks.setTaskCount(data.count)
            })
        });
    }

    const closeCreateTaskPopover = () => {
        setCurrentTask(defaultTask);
        setPopoverVisible(false);
    }

    const setFilterByPriority = (e) => {
        const selectedPriorityId = +e.target.value;
        setPriorityFilter(selectedPriorityId);
    }
    const setFilterByProject = (e) => {
        const selectedProjectId = +e.target.value;
        setProjectFilter(selectedProjectId);
    }

    const setFilterByStatus = (e) => {
        const selectedStatusId = +e.target.value;
        setStatusFilter(selectedStatusId);
    }

    return (
        <div className="block">
            <div className="flex">
                <button onClick={() => openCreateTaskPopover()} className="crt-task-btn">Create Task</button>
                <CreateTaskFragment currentTask={currentTask} saveTask={saveTask} setCurrentTask={setCurrentTask} visible={createTaskPopoverVisible} closePopover={closeCreateTaskPopover} />
                <div className="filter">
                    <label>Project:</label>
                    <select value={projectFilter} onChange={(e) => setFilterByProject(e)}>
                        <option key={0} value={0}>All</option>
                        {tasks._projects.map((project) => {
                            return (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="filter">
                    <label>Priority:</label>
                    <select value={priorityFilter} onChange={(e) => setFilterByPriority(e)}>
                        <option key={0} value={0}>All</option>
                        {tasks._priorities.map((priority) => {
                            return (
                                <option key={priority.id} value={priority.id}>{priority.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="filter">
                    <label>Status:</label>
                    <select value={statusFilter} onChange={(e) => setFilterByStatus(e)}>
                        <option key={0} value={0}>All</option>
                        {tasks._statuses.map((status) => {
                            return (
                                <option key={status.id} value={status.id}>{status.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="tasks-container">

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