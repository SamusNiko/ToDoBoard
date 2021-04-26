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
    const [taskList, setTaskList] = useState(tasks._tasks);
    const [priorityFilter, setPriorityFilter] = useState(0);
    const [statusFilter, setStatusFilter] = useState(0);
    const [createTaskPopoverVisible, setPopoverVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState(defaultTask);

    const openCreateTaskPopover = () => {
        setPopoverVisible(true)
    }

    const onEditTaskClick = (task) => {
        setCurrentTask({ ...task });
        setPopoverVisible(true);
    }

    const saveTask = (task) => {
        if (task.id) {
            tasks.updateTask(task);
        } else {
            tasks.pushNewTask(task);
        }
        applyFilters(statusFilter, priorityFilter)
    }

    const closeCreateTaskPopover = () => {
        setCurrentTask(defaultTask);
        setPopoverVisible(false);
    }

    const setFilterByPriority = (e) => {
        const selectedPriorityId = +e.target.value;
        setPriorityFilter(selectedPriorityId);
        applyFilters(statusFilter, selectedPriorityId);
    }

    const setFilterByStatus = (e) => {
        const selectedStatusId = +e.target.value;
        setStatusFilter(selectedStatusId);
        applyFilters(selectedStatusId, priorityFilter);
    }

    const applyFilters = (status, priority) => {
        let filteredTasks;
        if (status === 0 && priority !== 0) {
            filteredTasks = tasks._tasks.filter((task) => task.priorityId === priority);
        } else if (status !== 0 && priority === 0) {
            filteredTasks = tasks._tasks.filter((task) => task.statusId === status);
        } else if (status !== 0 && priority !== 0) {
            filteredTasks = tasks._tasks.filter((task) => task.statusId === status && task.priorityId === priority);
        } else {
            filteredTasks = tasks._tasks;
        }
        setTaskList(filteredTasks);
    }

    return (
        <div className="block">
            <div className="flex">
                <button onClick={() => openCreateTaskPopover()} className="crt-task-btn">Create Task</button>
                <CreateTaskFragment currentTask={currentTask} saveTask={saveTask} setCurrentTask={setCurrentTask} visible={createTaskPopoverVisible} closePopover={closeCreateTaskPopover} />
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
            {taskList.map((task) => {
                return (
                    <TaskItem onEditTaskClick={onEditTaskClick} key={task.id} task={task} />
                )
            })}
        </div>
    )
})

export default TasksList;