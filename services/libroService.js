const { Libro } = require('../models');
class LibroService{
    static async getAllLibros() {
        try {
            return await Libro.findAll();
        } catch (error) {
            console.log(error);
        }
    }
    static async createLibro(libro) {
        try {
            return await Libro.create(libro);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = LibroService