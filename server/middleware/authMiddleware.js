const { compareSync } = require('bcrypt');
const ApiError = require('../error/ApiError');
const tokenService = require('../service/tokenService');

module.exports = function(req, res, next){
    try {
        const authorizationHeader = req.headers.authorization;
        console.log('auth', authorizationHeader);
        if(!authorizationHeader){
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        console.log('accec', accessToken);
        if(!accessToken){
            return next(ApiError.UnauthorizedError());
        }
        
        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData){
            return next(ApiError.UnauthorizedError());
        }

        req.user = userData;
        next();
    } catch (error) {
        return next(ApiError.UnauthorizedError());   
    }
}