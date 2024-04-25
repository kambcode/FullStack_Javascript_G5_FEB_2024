// Reduce

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumanumeros = 0;
for (const numero of numeros) {
  sumanumeros += numero;
}
console.log(sumanumeros);
const total = numeros.reduce((acumulador, value) => acumulador + value, 0);

console.log(total);
