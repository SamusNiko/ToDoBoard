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
        const { id } = req.body;
        const project = await Project.findOne({
            where: { id }
        }, );
        const tasks = await await Task.findAll({ where: { projectId: project.id } })
            // await task.destroy();
        await tasks.forEach((task) => {
            task.destroy();
        })
        await project.destroy();
        return res.json("Project and related tasks were deleted successfully");
    }

    async getAllProject(req, res) {
        const { withTasks } = req.query;
        let project;
        if (withTasks) {
            project = await Project.findAndCountAll({
                include: [{ model: Task, as: 'tasks' }]
            }, );
        } else {
            project = await Project.findAndCountAll();
        }
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