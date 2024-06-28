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

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, isEmail: true },
    password: { type: DataTypes.STRING, allowNull: false },
    activationLink: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
    isActivated: { type: DataTypes.BOOLEAN, defaultValue: false }
});

const Token = sequelize.define('token', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, unique: true, allowNull: false},
    refreshToken: { type: DataTypes.STRING, allowNull: false }
});

//Describe relationship of our models

User.hasOne(Token, { foreignKey: "userId" });
Token.belongsTo(User, { foreignKey: "userId" });

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
    Priority,
    User,
    Token
}