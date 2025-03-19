const { Usuario } = require('../models');

class UsuarioService {
    static async createUsuario(usuario) {
        try {
            return await Usuario.create(usuario);
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllUsuarios() {
        try {
            return await Usuario.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UsuarioService;