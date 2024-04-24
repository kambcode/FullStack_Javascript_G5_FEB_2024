// Filter (condición)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mayorA5 = numeros.filter((numero) => numero > 5);

console.log(mayorA5);

const numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log(numerosPares);

const estudiantes = [
  {
    nombre: "Ana",
    edad: 20,
    promedio: 85,
    genero: "Femenino",
    carrera: "Ingeniería Civil",
    ciudad: "Bogotá",
  },
  {
    nombre: "Juan",
    edad: 22,
    promedio: 78,
    genero: "Masculino",
    carrera: "Medicina",
    ciudad: "Medellín",
  },
  {
    nombre: "María",
    edad: 21,
    promedio: 90,
    genero: "Femenino",
    carrera: "Administración de Empresas",
    ciudad: "Bogotá",
  },
];

const estudiantesBogota = estudiantes.filter(
  (estudiante) => estudiante.ciudad === "Bogotá"
);

console.log(estudiantesBogota);
