// Array [] -> Estructuras de datos

const arr = [
  "banana",
  1,
  ["juan", "julian"],
  { name: "daniel" },
  ["nuevo array"],
];
// console.log(arr[2][1]); //julian
// console.log(arr[4][0]); //nuevo array

// Push
const nuevo_arreglo_lenght = arr.push("orange"); // añade un nuevo elemento al final del arreglo

// console.log(nuevo_arreglo_lenght);
// console.log(arr);

// Pop

arr.pop();

// console.log(arr);

// indexOf

const index = arr.indexOf("banana"); // retorna el index del item que buscamos, retorna -1 cuando no existe el elemento

// console.log(index);

// // splice

arr.splice(index, 1, 10); // remplazar un item en algun index

// console.log(arr);

// Longitud del array

const longitud = arr.length;

// console.log(longitud);

// // Acceder a un elemento

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4][0]);

// // join

const user = ["david", 23, "developer", "Colombia"];

// console.log(user.join());

// Shift

// console.log(user.shift());
// console.log(user);

// Sort

const numeros = [20, 16, 222, 11, 89, 454, 654, 64, 12, 45];

// (a, b) => a - b funcion flecha
// console.log(
//   numeros.sort(
//     (elemento_siguiente, elemento_actual) =>
//       elemento_actual - elemento_siguiente
//   )
// );

// unshift

numeros.unshift(1);

// console.log(numeros);
