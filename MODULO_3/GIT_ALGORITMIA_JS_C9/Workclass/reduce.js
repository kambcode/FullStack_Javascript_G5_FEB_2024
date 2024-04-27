const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reduce(array, callback, initialValue) {
  let acumulador = initialValue;

  for (let index = 0; index < array.length; index++) {
    acumulador = callback(acumulador, array[index]);
  }

  return acumulador;
}

const total = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total);

const total2 = reduce(
  numeros,
  (acumulador, valor) => {
    return acumulador + valor;
  },
  0
);

console.log(total2);
