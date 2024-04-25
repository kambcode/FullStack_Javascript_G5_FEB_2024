// Map

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numerosX10 = [];

// for (const elemento of numeros) {
//   numerosX10.push(elemento * 10);
// }

const numerosX10 = numeros.map((elemento) => elemento * 10);

console.log(numerosX10);

// Objetos

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
    ciudad: "Cali",
  },
];

// Agrega campo semestre
const estudiantesSemestre3 = estudiantes.map((value) => {
  // value.semestre = 3;
  return { ...value, semestre: 3 };
});
console.log(estudiantesSemestre3);
console.log(estudiantes);
// Elimina el campo ciudad
const estudiantesSinCiudad = estudiantes.map((value) => {
  delete value.ciudad;
  return value;
});

console.log(estudiantesSinCiudad);
