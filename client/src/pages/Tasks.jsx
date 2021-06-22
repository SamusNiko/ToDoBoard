import React, { useContext, useState } from 'react';
import TasksList from '../components/TasksList';
import { Context } from '../index.jsx';
import { observer } from "mobx-react-lite";
import './styles/style.css';

const Tasks = observer(() => {


    const { tasks } = useContext(Context);
    const [priorityFilter, setPriorityFilter] = useState(0);
    const [statusFilter, setStatusFilter] = useState(0);
    const [projectFilter, setProjectFilter] = useState(0);

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
            <TasksList currentProject={null} priorityFilter={priorityFilter} statusFilter={statusFilter} projectFilter={projectFilter} />
        </div>
    )
})

export default Tasks;