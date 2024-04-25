// Scope -> hace referencia al alcance de las variables dentro del codigo
// Scope local y el Scope global

var banderaDeLectura = false;

function funcion1() {
  const banderaDeEscritura = true;
  console.log("Funcion1", banderaDeLectura);
  console.log("Funcion1 escritura", banderaDeEscritura);
}

function funcion2() {
  banderaDeLectura = "hola mundo";
  console.log("Funcion2", banderaDeLectura);
}

console.log("console log", banderaDeLectura);
funcion1();
funcion2();
// console.log("console log escritura", banderaDeEscritura); -> arroja error por scope local

// ECMASCRIPT -> ECMA INTERNATIONAL -> ES6

// ARROW functions
function great(name) {
  return "Hola, " + name;
}

const greatArrow = (name) => "Hola, " + name;
const greatArrow2 = (name) => {
  return "Hola, " + name;
};
const greatArrow3 = (name) => "Hola, " + name;

console.log(great("julian"));
console.log(greatArrow("Manuel"));
console.log(greatArrow2("Javier"));
console.log(greatArrow3("Andres"));

// TEMPLATE STRINGS

const greatArrow4 = (name, edad) =>
  `Hola, ${name} y continuar escrbiendo y decir edad: ${edad}`;
console.log(greatArrow4("Francisco", 20));

console.log("Soy Juan");
console.log("Vivo en mexico");
console.log("tengo 20 años");
let nombre = "Juan";
let ciudad = "mexico";
let edad = 20;
console.log(`Soy ${nombre}
Vivo en ${ciudad}
tengo ${edad} años`);

// Destructuring
const persona = {
  name: nombre,
  year: edad,
  city: ciudad,
};
console.log(persona);
console.log(persona.name, persona["name"]);

const { name: nombrecompleto, year, city } = persona;
console.log(nombrecompleto, year, city);

const arreglo_frutas = ["mango", "fresa", "banano"];
if (arreglo_frutas[0] == "mango") {
  console.log("la fruta mas vendida es el mango");
}
const [Fruta_mas_vendida, fruta2, fruta3] = arreglo_frutas;
console.log(`la fruta mas vendida es ${Fruta_mas_vendida}`);
console.log(fruta1, fruta2, fruta3);
