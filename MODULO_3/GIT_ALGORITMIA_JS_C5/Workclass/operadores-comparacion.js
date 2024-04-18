const a = 1;
const b = 3;
const c = "1";
const d = +"3";
// Operadores de magnitud  > (Mayor que), < (menor que), >= (mayor o igual que)
// y <= (menor o igual que)
if (a > b) {
} else {
  console.log(" no ingresa");
}
if (b > a) {
  console.log(" si ingresa");
}

if (a < b) {
  console.log(" si ingresa");
}

if (b >= d) {
  console.log("Ingrese b d");
}

// Operados de diferencia != y !==
if (a != b) {
  console.log("Ingreso a != b");
}
if (b !== d) {
} else {
  console.log("No Ingreso a !== b");
}

// Operadores de igualdad == y ===
if (a == c) {
  console.log("Ingreso a == b");
}

if (a === c) {
} else {
  console.log("NO ingreso a === b");
}

if (b === d) {
  console.log("Ingreso b === d");
}

// Necesitamos definir si una persona es bebe, niño, adolescente, adulto, adulto mayor
// bebes son aquellos que estan entre los 0 y 3 años
// niños son aquellso que estan entre los 4 y 12 años
// adolescentes son aquiellos que estan entre 13 y 17 años
// adultos son aquellos que estan entre 18 y 60 años
// adulto mayor son aquellos mayores a 60 años

const edad = 20;

if (0 < edad <= 3) {
  console.log("es un bb");
}

if (4 < edad <= 12) {
  console.log("es un niño");
}
