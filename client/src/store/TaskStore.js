import { makeAutoObservable } from 'mobx';

export default class TaskStore {
    constructor() {
        this._statuses = [
                { id: 1, name: "To Do" },
                { id: 2, name: "In Progress" },
                { id: 3, name: "Blocked" },
                { id: 4, name: "Done" }
            ],
            this._priorities = [
                { id: 1, name: "Low" },
                { id: 2, name: "Medium" },
                { id: 3, name: "High" },
                { id: 4, name: "Very High" }
            ],
            this._tasks = [
                { id: 1, name: "Learn React", description: "Learn hooks", statusId: 1, priorityId: 2 },
                { id: 2, name: "Learn English", description: "Learn verbs", statusId: 2, priorityId: 2 },
                { id: 3, name: "Do english home work", description: "Read text, write message", statusId: 4, priorityId: 4 },
                { id: 4, name: "Walk my dog", description: "Walk my dog after work", statusId: 4, priorityId: 1 },
                { id: 5, name: "Wash  dishes", description: "Wash dishes after lunch", statusId: 2, priorityId: 3 }
            ]
        makeAutoObservable(this)
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

    get statuses() {
        return this._statuses
    }
    get priorities() {
        return this._priorities
    }
    get tasks() {
        return this._tasks
    }
}