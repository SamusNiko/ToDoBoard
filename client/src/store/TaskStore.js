import { makeAutoObservable } from 'mobx';

export default class TaskStore {
    constructor() {
        this._taskCount = 6
        this._statuses = [
            { id: 1, name: "To Do" },
            { id: 2, name: "In Progress" },
            { id: 3, name: "Blocked" },
            { id: 4, name: "Done" }
        ];
        this._priorities = [
            { id: 1, name: "Low" },
            { id: 2, name: "Medium" },
            { id: 3, name: "High" },
            { id: 4, name: "Very High" }
        ];
        this._tasks = [
            { id: 1, name: "Learn React", description: "Learn hooks", statusId: 1, priorityId: 2 },
            { id: 2, name: "Learn English", description: "Learn verbs", statusId: 2, priorityId: 2 },
            { id: 3, name: "Do english home work", description: "Read text, write message", statusId: 4, priorityId: 4 },
            { id: 4, name: "Walk my dog", description: "Walk my dog after work", statusId: 4, priorityId: 1 },
            { id: 5, name: "Wash  dishes", description: "Wash dishes after lunch", statusId: 2, priorityId: 3 }
        ];
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

    pushNewTask(newTask) {
        this._tasks.push(newTask);
        this._taskCount = this._taskCount + 1;
    }

    removeTask(taskId) {
        this._tasks = this._tasks.filter((task) => {
            console.log(task.id !== taskId)
            return task.id !== taskId;
        });
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