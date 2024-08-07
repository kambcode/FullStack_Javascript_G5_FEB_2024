const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Instructor = require('./Instructor');
const Curso = require('./Curso');

const Asignacion = sequelize.define('Asignacion', {});

Instructor.hasMany(Asignacion);
Asignacion.belongsTo(Instructor);

Curso.hasMany(Asignacion);
Asignacion.belongsTo(Curso);

module.exports = Asignacion;