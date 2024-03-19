// ARRAYS
// Es una estructura de datos que puede contener múltiples elementos, 
// accesibles a través de un índice numérico
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivo como objetos y arrays.
const arr = [1,2,3,'texto',true];
// console.log(arr);

// Acceso a cada elemento dentro de un array
/*console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[arr.length - 1]);*/ // Asi se obtiene la ultima posicion de un array

// Iteración sobre los array
// Podemos usar ciclos para acceder a cada elemento dentro de un array
// Ciclo for
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element);
}

// Ciclo forEach
arr.forEach((element, index) => {
    if (index > 2) {
        return;
    }
    
    //console.log(`${element} - ${index}`);
});

// Ciclo for of
for (const element of arr) {
    //console.log(element);
}


// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en JS
const animals = ['perro', 'gato', 'oso', 'leon', 'elefante', 'pájaro', 'ballena', 'tiburón'];
// length -> Muestra la cantidad de elementos que hay en el array
console.log(animals.length);

// push -> Agrega un nuevo elemento al array
animals.push('tigre');
console.log(animals);
console.log(animals.length);

// pop -> Elimina el ultimo elemento dentro de un array y lo retorna
const removedAnimalWithPop = animals.pop();
console.log(animals);
console.log(removedAnimalWithPop);
console.log(animals.length);

// shift -> Elimina el primer elemento dentro de un array y lo retorna
const removedAnimalWithShift = animals.shift();
console.log(animals);
console.log(removedAnimalWithShift);
console.log(animals.length);

// unshift -> Agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
animals.unshift('liebre', 'tortuga');
console.log(animals);
console.log(animals.length);

// slice -> Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
// El array original no se modificará
const slicedArray = animals.slice(4, 8);
console.log(slicedArray);
console.log(animals);

// splice -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'];
const removedMonth = months.splice(4, 0, 'Mayo');
console.log(months);
console.log(removedMonth);

// Reemplaza 1 elemento en la posicion 4
const replacedMonth = months.splice(4, 1, 'Julio');
console.log(months);
console.log(replacedMonth);

// Genera un array nuevo a partir de la posicion solo enviando el primer parametro
const newMonths = months.splice(4);
console.log('new months::: ', newMonths);

// split -> En realidad es un metodo de los strings pero convierte un string en un array
const palabra = 'reconocer'; // ['carro', 'moto']
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Invierte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero.
const reversedArray = splittedArray.reverse();
console.log(reversedArray);

// join -> Une todos los elementos de un array en un string y devuelve este string
console.log(reversedArray.join());
console.log(reversedArray.join(''));
console.log(palabra === reversedArray.join('')); // Ejercicio palabra palindrome
console.log(reversedArray.join('-'));

// RETO
// 1. Tomando este array ['bmw', 'bugatti', 'lamborgini', 'ferrari', 'fiat', 'mclaren', 'mazda']
// Debe retornar un array con los carros que empiezan en b y que terminan en i
const carArray = ['bmw', 'bugatti', 'lamborgini', 'ferrari', 'fiat', 'mclaren', 'mazda'];
const starsWithB = [];
const endsWithI = [];

carArray.forEach(element => {
    if (element.startsWith('b')) {
        starsWithB.push(element);
    }

    if (element.endsWith('i')) {
        endsWithI.push(element);
    }
});

console.log(starsWithB); // starsWith
console.log(endsWithI); // endsWith


// Comparación entre arrays (referencia vs valor)
// En arrays y objetos la comparación se hace por referencia y no por valor

// Comparación en primitivos
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

// Comparación en arrays
const arr1 = [1,7,8];
const arr2 = [1,7,8];
console.log(arr1 === arr2);
const arr3 = arr1; // arr3 -> arr1 -> [1,7,8]
arr3[0] = 2;
console.log(arr1 === arr3);
console.log(arr1);
console.log(arr3);