//сервис для работы с юзером, регистрация, авторизация и т.д.

const { User } = require('../models/models');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const emailService = require('./emailService');
const tokenService = require('./tokenService');

const UserDto = require('./../dtos/user-dto');

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
            throw new Error(`Пользователь с таким email ${email} уже существует`);
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
}

module.exports = new UserService();