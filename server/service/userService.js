//сервис для работы с юзером, регистрация, авторизация и т.д.

const { User } = require('../models/models');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const emailService = require('./emailService');
const tokenService = require('./tokenService');
const ApiError = require('../error/ApiError');

const UserDto = require('../dtos/user-dto');

class UserService {
    //функция создания юзера
    async registration(email, password, username) {
        const candidate = await User.findAll({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: email }
                ]
            }
        });
        if (candidate.length) { // проверяем есть ли такой пользователь или нет
            throw ApiError.BadRequest(`Пользователь с таким email ${email} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3); //хэшируем пароль и храним захэшированную версию (security)
        const activationLink = uuid.v4(); //генерируем специальную линку для подтвержения регистрации, в дальнейшем будем отправлять на почту, чтобы юзер подтвердил
        const user = await User.create({ username, email, password: hashPassword, activationLink });
        await emailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`); //отправка сообщения для подтверждения почты

        const userDto = new UserDto(user.dataValues);
        const tokens = await tokenService.generateTokens({ ...userDto });
        console.log("token length", tokens.refreshToken.length)
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens, user: userDto
        }
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink: activationLink}});
        if(!user){
            throw ApiError.BadRequest ('Не корректная ссылка активации или пользоватьель не найден');
        }
        console.log("user:", user.isActivated);
        user.isActivated = true;
        console.log("user:", user.isActivated);
        await user.save();
    }

    async login(email, password) {
        const user = await User.findOne({where: {email: email}});
        if(!user){
            throw ApiError.BadRequest ('Пользоватеь с таким email не найден');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals){
            throw ApiError.BadRequest ('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens, user: userDto
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findOne({ where: { id: userData.id } });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens, user: userDto
        }
    }

    async getAllUsers(){
        const users = await User.findAll();
        return users;
    }
}

module.exports = new UserService();