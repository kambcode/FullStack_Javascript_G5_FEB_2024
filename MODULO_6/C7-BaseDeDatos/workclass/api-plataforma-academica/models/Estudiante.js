const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estudiante = sequelize.define('Estudiante', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Estudiante;