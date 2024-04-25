const persona = {
  nombre: "Ana",
  edad: 20,
  promedio: 85,
  genero: "Femenino",
  carrera: "Ingeniería Civil",
  ciudad: "Bogotá",
};

const persona2 = {
  nombre2: "Jorge",
  edad2: 20,
  promedio2: 85,
  genero2: "Femenino",
  carrera2: "Ingeniería Civil",
  ciudad2: "Bogotá",
};

const newPersona = {
  persona,
  semestre: 1,
};

// console.log(newPersona);

const newPersona2 = {
  ...persona,
  semestre: 1,
};

// console.log(newPersona2);

const personas = {
  ...persona,
  ...persona2,
};

const arreglo_personas = [persona, persona2];
console.log("arreglo_personas", arreglo_personas);

console.log(personas);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mas_numeros = [10, 11, 12, 13, 14, 15];

const copiaNumeros = [...numeros, ...mas_numeros];

console.log(copiaNumeros);
