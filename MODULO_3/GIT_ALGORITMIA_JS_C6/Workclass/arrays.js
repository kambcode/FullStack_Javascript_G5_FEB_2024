// Array [] -> Estructuras de datos

const arr = ["banana", 1, { name: "daniel" }, ["nuevo array"]];

// Push
const length = arr.push("orange"); // añade un nuevo elemento al final del arreglo

console.log(length);
console.log(arr);

// Ejercicio
const newArray = [];

for (let i = 0; i <= 1000000; i++) {
  newArray.push(i);
}

// console.log(newArray);

// Pop

arr.pop();

console.log(arr);

// indexOf

const index = arr.indexOf(1); // retorna el index del item que buscamos

console.log(index);

// splice

arr.splice(index, 1, 10); // remplazar un item en algun index

console.log(arr);

const arrayWithoutOne = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[2] !== 10) {
    arrayWithoutOne.push(arr[i]);
  }
}

console.log(arrayWithoutOne);

// Longitud del array

const longitud = arr.length;

console.log(longitud);

// Acceder a un elemento

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[3][0]);

// join

const user = ["david", 23, "developer", "Colombia"];

console.log(user.join());

// Shift

console.log(user.shift());

// Sort

const numeros = [20, 16, 222, 11, 89, 454, 654, 64, 12, 45];

console.log(numeros.sort((a, b) => a - b));

// unshift

numeros.sort((a, b) => a - b);

numeros.unshift(1);

console.log(numeros);
