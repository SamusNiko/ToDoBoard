// вспомогательный сервис для работы с токеном (генерация6 сохранение, обновление)
const jwt = require('jsonwebtoken'); //пакет для генерации jwt токенов
const { Token } = require('../models/models');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' }); //генерируем access токен, живет 30 минут
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' }); //генерируем рефреш токен, живет около 30 дней затем нужно обновлять
        return { accessToken, refreshToken };
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ where: { userId } }) //проверяем существует ли токен, если нет, то сохраняем рефреш токен для юзера
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await Token.create({ userId, refreshToken });
        return token;
    }
}

module.exports = new TokenService();