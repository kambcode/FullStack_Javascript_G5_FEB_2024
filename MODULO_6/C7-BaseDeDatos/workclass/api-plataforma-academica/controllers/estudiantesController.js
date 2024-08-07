const Estudiante = require('../models/Estudiante');

// Crear un nuevo estudiante
exports.crearEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.create(req.body);
        res.status(201).json(estudiante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los estudiantes
exports.obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un estudiante por ID
exports.obtenerEstudiantePorId = async (req, res) => {
    try {
        const estudiante = await Estudiante.findByPk(req.params.id);
        if (estudiante) {
            res.status(200).json(estudiante);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};