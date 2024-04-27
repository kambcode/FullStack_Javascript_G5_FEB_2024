const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.map(() => {});
numeros.filter(() => {});
numeros.reduce(() => {});

function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    callback(value, index);
  }
}

//
function logger(value, index) {
  console.log(`index: ${index} - value: ${value}`);
}

// metodo forEach
numeros.forEach(logger);

// funcion forEach
forEach(numeros, logger);
