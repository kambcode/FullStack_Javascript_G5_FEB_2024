const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Estudiante = require('./Estudiante');
const Curso = require('./Curso');

const Inscripcion = sequelize.define('Inscripcion', {
    fecha_inscripcion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Estudiante.hasMany(Inscripcion);
Inscripcion.belongsTo(Estudiante);

Curso.hasMany(Inscripcion);
Inscripcion.belongsTo(Curso);

module.exports = Inscripcion;