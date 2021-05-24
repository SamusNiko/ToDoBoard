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
    const { data } = await $host.get('api/task', {
        params: {
            statusId,
            priorityId,
            projectId
        }
    });
    return data;
}

export const fetchProjects = async() => {
    const { data } = await $host.get('api/project');
    return data;
}

export const fetchOneProject = async(id) => {
    const { data } = await $host.get('api/project/' + id);
    return data;
}

export const fetchStatuses = async() => {
    const { data } = await $host.get('api/status');
    return data;
}

export const fetchPriorities = async() => {
    const { data } = await $host.get('api/priority');
    return data
}

export const fetchOneDevice = async(id) => {
    const { data } = await $host.get('api/task/' + id);
    return data;
}

export const createTask = async(task) => {
    const { data } = await $host.post('api/task', task);
    return data;
}

export const createProject = async(project) => {
    const { data } = await $host.post('api/project', project);
    return data;
}

export const updateTask = async(task) => {
    const { data } = await $host.put('api/task', task);
    return data
}

export const deleteTask = async(task) => {
    const { data } = await $host.delete('api/task', { data: task });
    return data
}

export const deleteProject = async(project) => {
    const { data } = await $host.delete('api/project', { data: project });
    return data
}