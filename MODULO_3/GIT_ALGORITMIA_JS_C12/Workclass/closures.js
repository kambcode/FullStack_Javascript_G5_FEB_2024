// Closures

// Function Factory

function crearContador() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const contador = crearContador();
const contador2 = crearContador();
const contador3 = crearContador();

console.log("Maquina 1", contador()); // 1
console.log("Maquina 2", contador2()); // 1
console.log("Maquina 3", contador3()); // 1
console.log("Maquina 1", contador()); // 2
console.log("Maquina 2", contador2()); // 2
console.log("Maquina 3", contador3()); // 2
console.log("Maquina 1", contador()); // 3
console.log("Maquina 2", contador2()); // 3

function crearPersona(name, year, ocupation) {
  const nombre = name;
  const edad = year;
  const profesion = ocupation;

  function mostrarPersona() {
    console.log(nombre);
    console.log(edad);
    console.log(profesion);
    console.log("----------");
  }

  return mostrarPersona;
}

const usuario1 = crearPersona("Jose", 20, "Ingeniero");
const usuario2 = crearPersona("Pepito", 25, "Panadero");
const usuario3 = crearPersona("Sutanito", 30, "Arquitecto");

usuario1();
usuario2();
usuario3();

// //

const manzana = "manzana";

function exterior() {
  const piña = "piña";
  function interior() {
    const lechuga = "lechuga";
    console.log(lechuga);
    console.log(manzana);
    console.log(piña);
  }

  interior();
}

exterior();
// console.log(lechuga); //Esto retorna error porque la variable esta definida en un scope local

// // global scope
// // local scope
// // enclosing scope

const global = 10;

function sumA(a) {
  // global - a //
  return function (b) {
    // global - a - b
    return function (c) {
      // global - a - b - c
      return function (d) {
        // global - a - b -c -d
        return a + b + c + d + global;
      };
    };
  };
}

const sumB = sumA(1);
const sumC = sumB(1);
const sumD = sumC(1);
const total = sumD(1);

console.log(sumA(1)(1)(1)(1));
console.log(total);
