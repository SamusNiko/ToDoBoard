const { Priority } = require('../models/models');

class PriorityController {
    async create(req, res) {
        const { name } = req.body;
        const priority = await Priority.create({ name });
        return res.json(priority);
    }
    async getAll(req, res) {
        const priorities = await Priority.findAll();
        return res.json(priorities);
    }
}

module.exports = new PriorityController();