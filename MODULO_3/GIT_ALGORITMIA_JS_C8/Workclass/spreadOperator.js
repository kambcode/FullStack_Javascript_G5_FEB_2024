const persona = {
  nombre: "Ana",
  edad: 20,
  promedio: 85,
  genero: "Femenino",
  carrera: "Ingeniería Civil",
  ciudad: "Bogotá",
};

const newPersona = {
  persona,
  semestre: 1,
};

console.log(newPersona);

const newPersona2 = {
  ...persona,
  semestre: 3,
  universidad: "nacional",
};

console.log(newPersona2);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const copiaNumeros = [...numeros, 10, 11, 12, 13, 14, 15];

console.log(copiaNumeros);
