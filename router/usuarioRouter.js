const router = require('express').Router();
// import UsuarioController from './../controllers/usuarioController';
const UsuarioController = require('../controllers/usuarioController');

router.get('/usuarios', UsuarioController.getAllUsuarios);
router.post('/usuarios', UsuarioController.createUsuario);
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);


module.exports = router;


