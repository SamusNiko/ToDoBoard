import React, { useContext, useState } from 'react';
import { Context } from '../../index.jsx';
import { observer } from "mobx-react-lite";
import { fetchTasks, updateTask } from '../../http/taskApi';
import "./style.css";

const TaskOverviewSection = observer(({ task,style }) => {
    return (
        <div style={style} className="task-overview-section">
            Task Overview
        </div>
    )
})

export default TaskOverviewSection;