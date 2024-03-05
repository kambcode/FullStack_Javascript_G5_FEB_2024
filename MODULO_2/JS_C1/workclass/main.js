// ESCRIBIR EN EL DOM DESDE JS
document.write('<h1>Hola mundo</h1>');
document.write('Hola mundo');
document.write('<br>');
document.write(18);

// ALERT Y PROMPT PARA MOSTRAR Y OBTENER DATOS DEL USUARIO
alert('Hola mundo');
var nombre = prompt('Ingresa tu nombre');
document.write('<br>');
document.write(nombre);

// VARIABLES
var edad; // Declaración de variable
edad = 30; // Asginación de variable
document.write('<br>');
document.write(edad);

var primerNombre = 'Juan'; // Declaración y asignación de variable
document.write('<br>');
document.write(primerNombre);

var firstName = 'Sergio';
var lastName = 'Ceballos';
document.write(`<br>Mi nombre completo es: ${firstName} ${lastName}`);

// TIPOS DE DATOS
var numberOne = 18; // Number
var numberTwo = 10.5; // Number
var totalSum = numberOne + numberTwo; // Number
document.write(`<br>La suma total es: ${totalSum}`);

var nameValue = 'Sergio'; // String
nameValue = 10; // Aqui cambiamos el tipado dinamicamente porque pasamos de un valor string a un valor number
document.write('<br>');
document.write(nameValue);
var recuerdame = true; // Boolean
var noDefinido; // Undefined
console.log('valor: ', noDefinido);

// EJERCICIO PRACTICO
// 1. Tomar dos numeros de la pagina y sumarlos
// 2. Mostrar la respuesta con algo como La suma total es: X
var numero1 = prompt('Ingresa el primer número');
var numero2 = prompt('Ingresa el segundo número');
var sumaTotal = Number(numero1) + Number(numero2);
document.write('<br>');
document.write(`La suma total es: ${sumaTotal}`);