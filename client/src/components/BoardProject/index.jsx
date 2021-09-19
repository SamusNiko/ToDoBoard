import React, { useContext, useState } from 'react';
import Board from '../Board';
import { Context } from '../../index.jsx';
import { observer } from "mobx-react-lite";
import { fetchTasks, updateTask } from '../../http/taskApi';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

const BoardProject = observer(({ project, statuses }) => {
    const { tasks } = useContext(Context);
    const [currentTask, setCurrentTask] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    function onExpandButtonClick() {
        setIsExpanded(!isExpanded);
    }

    function addStyleOnHover(e) {
        if (e.target.className === "boardItem") {
            e.target.style.boxShadow = '0 2px 3px gray';
        }
        if (e.target.className === "boardContainer") {
            e.target.style.background = 'rgba(128, 128, 128, 0.329)';
        }
    }

    function removeStyleOnLeave(e) {
        if (e.target.className === "boardItem") {
            e.target.style.boxShadow = 'none';
        }
        if (e.target.className === "boardContainer") {
            e.target.style.background = 'none';
        }
    }

    function dragOverHandler(e) {
        if (currentTask) {
            e.preventDefault();
            addStyleOnHover(e);
        }
    }

    function dragStartHandler(e, item) {
        setCurrentTask(item);
    }

    function dragLeaveHandler(e) {
        if (currentTask) {
            removeStyleOnLeave(e);
        }
    }

    function dragEndHandler(e) {
        if (currentTask) {
            removeStyleOnLeave(e);
            setCurrentTask(null);
        }
    }

    function dropHandler(e, board) {
        if (!currentTask) {
            return;
        }

        e.preventDefault();
        removeStyleOnLeave(e);
        if (currentTask.statusId !== board.id) {
            currentTask.statusId = board.id
            updateTask(currentTask).then(() => {
                fetchTasks(null, null).then(data => {
                    tasks.setTasks(data.rows)
                    tasks.setTaskCount(data.count)
                });
            })
        }
        setCurrentTask(null);
    }

    return (
        <div className="board-project">
            <div className="flex board-project-header">
                <button className="expand-btn" onClick={onExpandButtonClick}><FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} /></button>
                <h2 >{project.name}</h2>
            </div>

            <div className="flex" style={isExpanded ? { display: "flex" } : { display: "none" }}>
                {
                    statuses.map((status) => {
                        const filteredTasks = project.tasks.filter(({ statusId }) => {
                            return status.id === statusId;
                        });
                        return (
                            <Board key={`${project.id + status.name}`}
                                dragLeaveHandler={dragLeaveHandler}
                                dropHandler={dropHandler}
                                dragEndHandler={dragEndHandler}
                                dragStartHandler={dragStartHandler}
                                dragOverHandler={dragOverHandler}
                                board={status} items={filteredTasks} />
                        )
                    })
                }
            </div>
        </div>
    )
})

export default BoardProject