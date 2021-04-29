import { makeAutoObservable } from 'mobx';

export default class TaskStore {
    constructor() {
        this._taskCount = 0
        this._statuses = [];
        this._priorities = [];
        this._tasks = [];
        makeAutoObservable(this);
    }

    setStatuses(statuses) {
        this._statuses = statuses
    }

    setPriorities(priorities) {
        this._priorities = priorities
    }

    setTasks(tasks) {
        this._tasks = tasks
    }

    setTaskCount(count) {
        this._taskCount = count;
    }

    getStatusName(id) {
        let name;
        this._statuses.some((status) => {
            return status.id === id ? name = status.name : '';
        });
        return name;
    }

    getPriorityName(id) {
        let name;
        this._priorities.some((priority) => {
            return priority.id === id ? name = priority.name : '';
        });
        return name;
    }

    get statuses() {
        return this._statuses
    }
    get priorities() {
        return this._priorities
    }
    get tasks() {
        return this._tasks
    }

    get taskCount() {
        return this._taskCount
    }
}