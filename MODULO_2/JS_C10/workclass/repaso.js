// REPASO
// 1. Crea un array `myArray` de 50 números, que contendrá 50 numeros números aleatorios entre 1 y 10. **Math**
const numeros = [];

for (let i = 1; i <= 50; i++) {
    const numero = Math.random() * 10;
    numeros.push(numero);
}

// console.log(numeros);

/*for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}*/

// 2. Usando el array que creaste en el punto 1, vamos a crear un nuevo arreglo llamado `newArray` que contenga solo los numeros que son menores a 4. 
// Ejemplo si en punto 1 generaste un arreglo  `myArray` como este [7,2,5,2,9,3,1,4,1], tu nuevo arreglo `newArray` debera ser [2,2,3,1,1].
const numbers = [7,2,5,2,9,3,1,4,1]; // length: 9, ultima posicion: indice 8
const numerosMenoresA4 = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; // 1
    if (number < 4) {
        numerosMenoresA4.push(number);
    }
}

// console.log(numerosMenoresA4);

// 3.Dado un array 5 elementos de strings eg. `const myArray = ["hola", "mundo", "como", "estas", "hoy"]`. 
// Copia los elementos del arreglo en un nuevo arreglo pero en orden inverso, y muéstralo por la pantalla.
const myArray = ["hola", "mundo", "como", "estas", "hoy"]; // length: 5
const result = [];

for (let i = myArray.length - 1; i >= 0; i--) {
    const palabra = myArray[i];
    result.push(palabra);
}

// console.log(result);


// RETO
// Agregar cinco estudiantes a una lista de estudiantes
// Estudiante: nombre, email y profesion
// Mostrar la lista de estudiantes
const estudiantes = [];

for (let i = 0; i <= 6; i++) {
    let persona = {
        nombre: `nombre - ${i + 1}`,
        email: `email - ${i + 1}`,
        profesion: `profesion - ${i + 1}`
    }
    estudiantes.push(persona);
}

console.log(estudiantes);