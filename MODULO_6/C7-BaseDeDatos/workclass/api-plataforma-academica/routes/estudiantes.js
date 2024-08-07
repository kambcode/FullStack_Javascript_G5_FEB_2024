const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.post('/estudiantes', estudiantesController.crearEstudiante);
router.get('/estudiantes', estudiantesController.obtenerEstudiantes);
router.get('/estudiantes/:id', estudiantesController.obtenerEstudiantePorId);
router.put('/estudiantes/:id', estudiantesController.actualizarEstudiante);
router.delete('/estudiantes/:id', estudiantesController.eliminarEstudiante);

module.exports = router;