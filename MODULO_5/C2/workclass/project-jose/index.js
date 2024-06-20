const obtenerEmpresa = require('./main');

const empresa = obtenerEmpresa();
console.log("Información de la empresa:");
console.log("Nombre:", empresa.nombre);
console.log("Fundación:", empresa.fundacion);
console.log("Sede:", empresa.sede);
console.log("Industria:", empresa.industria);
console.log("Número de empleados:", empresa.empleados);