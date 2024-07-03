const { Task } = require('../models/models');
const ApiError = require('../error/ApiError');


class TaskController {
    async create(req, res, next) {
        const { name, description, statusId, priorityId, projectId, deadLine } = req.body;
        const userId = req.headers['userid']; // Получение userId из заголовков
        console.log("Received userId:", userId);
        if (!userId) {
            return next(ApiError.BadRequest('User ID не указан'));
        }
        const task = await Task.create({ name, description, statusId, priorityId, projectId, deadLine, userId});
        return res.json(task);
    }

    async update(req, res) {
        const { id, name, description, statusId, priorityId, projectId, deadLine } = req.body;
        const task = await Task.findOne({
            where: { id }
        }, );
        task.name = name;
        task.description = description;
        task.statusId = statusId;
        task.priorityId = priorityId;
        task.projectId = projectId;
        task.deadLine = deadLine;
        const updatedTask = await task.save();
        return res.json(updatedTask);
    }

    async delete(req, res) {
        const { id } = req.body;
        const task = await Task.findOne({
            where: { id }
        });
        await task.destroy();
        return res.json("Task was deleted successfully");
    }

    async getAllTasks(req, res, next) {
        let { statusId, priorityId, projectId } = req.query;
        const parameters = {};
        const userId = req.headers['userid']; // Получение userId из заголовков
        console.log("Received userId:", userId);
        if (userId) {
            parameters.userId = userId;
        } else {
            return next(ApiError.BadRequest('User ID не указан'));
        }
        
        if (statusId) {
            parameters.statusId = statusId;
        }
        if (priorityId) {
            parameters.priorityId = priorityId;
        }
        if (projectId) {
            parameters.projectId = projectId;
        }
        
        // page = page || 1
        // limit = limit || 9
        // let offset = page * limit - limit
        // tasks = await Task.findAndCountAll({ where: { statusId }, limit, offset })
        let tasks = await Task.findAndCountAll({ where: parameters });
        // if (!statusId && !priorityId) {
        //     tasks = await Task.findAndCountAll();
        // }
        // if (statusId && !priorityId) {
        //     tasks = await Task.findAndCountAll({ where: { statusId } });
        // }
        // if (!statusId && priorityId) {
        //     tasks = await Task.findAndCountAll({ where: { priorityId } });
        // }
        // if (statusId && priorityId) {
        //     tasks = await Task.findAndCountAll({ where: { priorityId, statusId } });
        // }
        return res.json(tasks);
    }

    async getTaskById(req, res) {
        const { id, userId } = req.params;
        const task = await Task.findOne({
            where: { id, userId }
        }, );
        return res.json(task);
    }

}

module.exports = new TaskController();