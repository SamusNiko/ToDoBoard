import { makeAutoObservable } from 'mobx';

export default class UserStore {
    constructor() {
        this._userName = "Kolumbas";
        this._isAuth = false;
        makeAutoObservable(this);
    }

    setUser(userName) {
        this._userName = userName
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth
    }

    get userName() {
        return this._userName;
    }

    get isAuth() {
        return this._isAuth;
    }
}