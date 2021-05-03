const { Project, Task } = require('../models/models');

class ProjectController {
    async create(req, res) {
        const { name, description } = req.body;
        const project = await Project.create({ name, description });
        return res.json(project);
    }

    async update(req, res) {

    }

    async delete(req, res) {

    }

    async getAllProject(req, res) {
        const project = await Project.findAndCountAll();
        return res.json(project);
    }

    async getProjectById(req, res) {
        const { id } = req.params;
        const project = await Project.findOne({
            where: { id },
            include: [{ model: Task, as: 'tasks' }]
        }, );
        return res.json(project);
    }

}

module.exports = new ProjectController();