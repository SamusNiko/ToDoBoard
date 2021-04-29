const { Task } = require('../models/models');

class TaskController {
    async create(req, res) {
        const { name, description, statusId, priorityId } = req.body;
        const task = await Task.create({ name, description, statusId, priorityId });
        return res.json(task);
    }

    async update(req, res) {
        const { id, name, description, statusId, priorityId } = req.body;
        const task = await Task.findOne({
            where: { id }
        }, );
        console.log(task);
        task.name = name;
        task.description = description;
        task.statusId = statusId;
        task.priorityId = priorityId;
        const updatedTask = await task.save();
        return res.json(updatedTask);
    }

    async delete(req, res) {
        const { id } = req.body;
        const task = await Task.findOne({
            where: { id }
        }, );
        await task.destroy();
        return res.json("Task was deleted successfully");
    }

    async getAllTasks(req, res) {
        let { statusId, priorityId } = req.query;
        // page = page || 1
        // limit = limit || 9
        // let offset = page * limit - limit
        // tasks = await Task.findAndCountAll({ where: { statusId }, limit, offset })
        let tasks;
        if (!statusId && !priorityId) {
            tasks = await Task.findAndCountAll();
        }
        if (statusId && !priorityId) {
            tasks = await Task.findAndCountAll({ where: { statusId } });
        }
        if (!statusId && priorityId) {
            tasks = await Task.findAndCountAll({ where: { priorityId } });
        }
        if (statusId && priorityId) {
            tasks = await Task.findAndCountAll({ where: { priorityId, statusId } });
        }
        return res.json(tasks);
    }

    async getTaskById(req, res) {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id }
        }, );
        return res.json(task);
    }

}

module.exports = new TaskController();