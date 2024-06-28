import { $host } from "./index";

export const fetchTasks = async(statusId, priorityId, projectId) => {
    if (statusId === 0) {
        statusId = null;
    }
    if (priorityId === 0) {
        priorityId = null;
    }
    if (projectId === 0) {
        projectId = null;
    }
    const { data } = await $host.get('/task', {
        params: {
            statusId,
            priorityId,
            projectId
        }
    });
    return data;
}

export const fetchProjects = async(withTasks) => {
    const { data } = await $host.get('/project', {
        params: {
            withTasks
        }
    });
    return data;
}

export const fetchOneProject = async(id) => {
    const { data } = await $host.get('/project/' + id);
    return data;
}

export const fetchStatuses = async() => {
    const { data } = await $host.get('/status');
    return data;
}

export const fetchPriorities = async() => {
    const { data } = await $host.get('/priority');
    return data
}

export const fetchOneTask = async(id) => {
    const { data } = await $host.get('/task/' + id);
    return data;
}

export const createTask = async(task) => {
    const { data } = await $host.post('/task', task);
    return data;
}

export const createProject = async(project) => {
    const { data } = await $host.post('/project', project);
    return data;
}

export const updateTask = async(task) => {
    const { data } = await $host.put('/task', task);
    return data
}

export const deleteTask = async(task) => {
    const { data } = await $host.delete('/task', { data: task });
    return data
}

export const deleteProject = async(project) => {
    const { data } = await $host.delete('/project', { data: project });
    return data
}