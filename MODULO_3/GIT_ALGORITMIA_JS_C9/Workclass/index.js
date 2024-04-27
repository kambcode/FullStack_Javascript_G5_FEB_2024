// Procesar un arreglo, de manera que se muestre cada uno de los elementos
// escalados por un factor "x" que se recibo al igual que array como argumentos
// e imprimir Haciendo uso de callback
// En otro callback despues de procesar los datos muestre la suma de los elmentos

function escalar(un_arreglo, x) {
  un_arreglo.forEach((elemento) =>
    console.log(`El elemento escado es = ${elemento * x}`)
  );
}

function sumar_todo(un_arreglo) {
  const suma = un_arreglo.reduce(
    (acumulador, valor) => (acumulador += valor),
    0
  );
  console.log(`la suma del arerglo es = ${suma}`);
}

function escala_y_suma(un_arreglo, factor_escalar, callback1, callback2) {
  // lo primero qeu hace es escalar los valores del arreglo
  callback1(un_arreglo, factor_escalar);
  // sumar los valores del areglo original
  callback2(un_arreglo);
}

const arreglo = [1, 5, 4, 6, 87, 3, 3, 2, 4];
escala_y_suma(arreglo, 2, escalar, sumar_todo);
