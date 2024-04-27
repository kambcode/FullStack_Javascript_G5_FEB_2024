function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function calculadora(numA, numB, callback) {
  return callback(numA, numB);
}

const a = 10;
const b = 2;

console.log(calculadora(a, b, suma)); // 12
console.log(calculadora(a, b, resta)); // 8
console.log(calculadora(a, b, multiplicacion)); // 20
console.log(calculadora(a, b, division)); // 5
