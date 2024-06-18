let edad = 25;
let precio = 1500;
/** Condicionales basicas **/
if (edad>18) {
  console.log('Es mayor de edad');
} else {
  console.log('No es mayor de edad')
}

if(precio>=2000) {
  console.log('Este producto tiene impuesto');
} else {
  console.log('Este producto no tiene impuesto');
}

/** Funciones basicas **/
function addNumbers(a, b){
  /**Acá, va la lógica de nuestra función.**/
  console.log(a+b);
}

/**Esta es la manera de invocar una función**/
addNumbers(1,5)

function nombreDeLaFuncion(parametro1, parametro2) {
  // Cuerpo de la función
}

// Función que saluda
function saludar() {
  console.log("¡Hola, mundo!");
}

// Llamada a la función
saludar();

/** Esto es un array, que va ser recorrido por un ciclo o loop */
const students = ["Alejandro", "Baris", "Maria", "Dave", "Julian"];

for(let index = 0; index < students.length; index++) {
  console.log('Name of student is: ' + students[index]);
}

console.log(students[1]);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
var array1 = [1, 2, 3];
var array2 = [...array1];
console.log(array2); // [1, 2, 3]