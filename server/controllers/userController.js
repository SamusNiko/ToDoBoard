const userService = require('./../service/userService');
const { User } = require('../models/models');


class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, username } = req.body;
            const userData = await userService.registration(email, password, username);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); //храним рефреш токен в куках. //secure: true - для https
            return res.json(userData);
        } catch (e) {

        }
    }
    async login(req, res, next) {
        try {

        } catch (e) {

        }
    }
    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {

        }
    }
}

module.exports = new UserController();