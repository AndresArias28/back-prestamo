const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/libros', libroController.getLibros);
router.post('/libros', libroController.createLibro);
router.delete('/libros/:id', libroController.deleteLibro);

module.exports = router;