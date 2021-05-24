const sequelize = require('../db');
const { DataTypes } = require('sequelize');

//Describe internal field
const Project = sequelize.define('project', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
});

const Task = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    deadLine: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

const Status = sequelize.define('status', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Priority = sequelize.define('priority', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

//Describe relationship of our models

Status.hasMany(Task)
Task.belongsTo(Status)

Priority.hasMany(Task)
Task.belongsTo(Priority)

Project.hasMany(Task, { as: "tasks" });
Task.belongsTo(Project)

module.exports = {
    Project,
    Task,
    Status,
    Priority
}