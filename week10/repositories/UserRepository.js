const User = require('../models/User.js');

class UserRepository {
    static get(limit, page) {
        return User.get(limit, page);
    }

    static getById(id) {
        return User.getById(id);
    }

    static getByEmail(email) {
        return User.getByEmail(email);
    }

    static post(obj) {
        return User.post(obj);
    }

    static put(id, obj) {
        return User.put(id, obj);
    }

    static delete(id) {
        return User.delete(id);
    }
}

module.exports = UserRepository;