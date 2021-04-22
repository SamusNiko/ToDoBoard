export function setPriorityColor(id) {
    switch (id) {
        case 1:
            return 'priority-low'
        case 2:
            return 'priority-medium'
        case 3:
            return 'priority-high'
        case 4:
            return 'priority-veryhigh'
        default:
            return 'priority-default'
    }
}

export function setStatusColor(id) {
    switch (id) {
        case 1:
            return 'status-todo'
        case 2:
            return 'status-in-progress'
        case 3:
            return 'status-blocked'
        case 4:
            return 'status-done'
        default:
            return 'status-todo'
    }
}