const UsuarioService = require( "../services/usuarioService");

class UsuarioController {
    static async getAllUsuarios(req, res) {
        try {
            let usuarios = await UsuarioService.getAllUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ message: 'Error obteniendo usuarios', error: error.message });
        }
    }

    static async createUsuario(req, res) {
        try {
            const usuario = await UsuarioService.createUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ message: 'Error creando usuario', error: error.message });
        }
    }

    static async deleteUsuario(req, res) {
        try {
            const id = req.params.id;
            const usuario = await UsuarioService.deleteUsuario(id);
            res.status(200).json({ message: 'Usuario eliminado', usuario });
        } catch (error) {
            res.status(500).json({ message: 'Error eliminando usuario', error: error.message });
        }
    }
}

module.exports = UsuarioController;