import { $host } from "./index";

export default class AuthService {
    static async login(email, password) {
        return $host.post('/login', { email, password })
    }

    static async registration(email, password) {
        return $host.post('/registration', { email, password })
    }

    static async logout() {
        return $host.post('/logout')
    }
}