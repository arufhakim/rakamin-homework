const Movie = require('../models/Movie.js');

class MovieRepository {
    static get(limit, offset) {
        return Movie.get(limit, offset);
    }

    static getById(id) {
        return Movie.getById(id);
    }

    static post(obj) {
        return Movie.post(obj);
    }

    static put(id, obj) {
        return Movie.put(id, obj);
    }

    static putPhoto(id, photo) {
        return Movie.putPhoto(id, photo);
    }

    static delete(id) {
        return Movie.delete(id);
    }
}

module.exports = MovieRepository;