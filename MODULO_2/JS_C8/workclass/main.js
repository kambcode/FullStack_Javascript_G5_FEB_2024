// ¿Qué es una función?
// Una función en JavaScript es un bloque de código que realiza una tarea específica. 
// Puedes pensar en ella como una especie de máquina que toma algo (entradas), hace algo con eso, y luego produce un resultado (salida).

// ¿Por qué usar funciones?
// Las funciones nos permiten escribir código reutilizable y modular.
// En lugar de escribir el mismo código una y otra vez, podemos definir una función que realice esa tarea y simplemente llamar a esa función cuando la necesitemos.

// Sintaxis básica:
// Para definir una función en JavaScript, usamos la palabra clave function, seguida del nombre de la función y paréntesis (), donde opcionalmente podemos especificar 
// los parámetros de entrada y de salida. Después, viene un bloque de código encerrado entre llaves {} que contiene las instrucciones que queremos que la función realice.

// Función sin parametros (datos de entrada | input)
function nombreDeLaFuncion() {
    console.log('Hello world');
}

// Función con parámetros
function nombreDeLaFuncion2(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
}

// LLamar a una función
// Una vez que hemos definido una función, podemos llamarla o invocarla en cualquier parte de nuestro código
// simplemente escribiendo su nombre seguido de los parentesis ()
nombreDeLaFuncion();
nombreDeLaFuncion2(1,2);

// Parámetros y argumentos:
// Los parámetros son variables que se utilizan en la definición de la función para representar los valores que se pasan a la función cuando se llama.
// Los argumentos son los valores reales que se pasan a la función cuando se llama.

// Valor de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave return.
// Esto es útil cuando queremos que nuestra función produzca algún resultado que podamos usar más tarde en nuestro programa.
function restar(numero1, numero2) {
    return numero1 - numero2;
}

let resultadoResultado = restar(10, 8);
console.log(restar(10, 8));

// RETO
// 1. Mostrar el nombre y la edad de una persona usando una funcion. Si la persona es mayor de edad debe decir que
// es mayor de edad y si no menor de edad.
function preguntarInformacion(nombre, edad) {
    console.log(`nombre: ${nombre} tiene ${edad}`)
    if (edad>18){
        console.log('eres mayor de edad')
    }else{
        console.log('eres menor de edad')
    }
}

preguntarInformacion('Juanes', 19);


// Funciones anónimas y expresiones de función:
// Además de las funciones con nombre que acabamos de ver, también puedes crear funciones anónimas (sin nombre).
// Las funciones anónimas deben guardarse en memoria para poder ser ejecutadas ya que no tienen un nombre o identificador definido. 
// Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de =), esto es una Expresión de función.
// Si queremos ejecutar una funcion anónima sin guardarla en memoria debemos usar las IIFE (sigla en inglés).

// Función anónima sin retorno
let saludar = function() {
    console.log('hola');
}


// Función anónima con retorno
let nombre = 'sdsd'; // sdsd
let edad = 18; // 18
let esMayorDeEdad = true; // true
let multiplicar = function(num1, num2) {
    return num1 * num2;
}

console.log('multiplicar: ', multiplicar); // El valor de multiplicar es una función [Function: multiplicar]

saludar();
let resultadoMultiplicar = multiplicar(5, 4);
console.log(resultadoMultiplicar);

// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function greetings() {
    console.log('hello world');
})();

// IIFE con valor de retorno
let saludo = (function() {
    return 'Hello world';
})();

console.log(saludo);

// IIFE con parámetros
console.log((function(num1, num2) {
    return num1 + num2;
})(8, 7));

let dividir = (function(num1, num2) {
    return num1 / num2;
})(20, 5);

console.log(dividir);

// Alcance (scope) de las variables en las funciones:
// Las variables definidas dentro de una función sólo son accesibles dentro de esa función, a menos que sean variables globales.
// La clave para entender scopes tanto de bloque como de funcion es dónde estoy usando una variable y cómo la estoy declarando (let, const o var)
let a = 1;
console.log(a);

function doSomething() {
    console.log(a);
    let b = 2;
    var c = 3;
    
    if (true) {
        let d = 4;

        if (true) {
            if (true) {
                if (true) {
                    var e = 5;
                }
            }
        }

        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
    }

    //console.log(d);
    console.log(e);
}

// console.log(b); // Error porque b esta siendo usando en el scope global y ahi no esta declarada

doSomething();


// RETO
// Hacer una calculadora basica con las cuatro operaciones de acuerdo a la operacion que desee hacer el usuario: sumar, restar, multiplicar y dividir
// Se debe separar el codigo en funciones de acuerdo a las operaciones posibles.
// Arrow function: Es una forma diferente y mas ligera de declarar variables quitando la palabra function, agregando una flecha =>,
// quitando las llaves {} y el return en caso de que las instrucciones solo sean de una linea
const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function calculate(option, num1, num2) {
    if (option !== 'sum' && option !== 'sub' && option !== 'multiply' && option !== 'divide') {
        return 'Operacion equivocada';
    }

    if (option === 'sum') {
        const resultadoSumar = sum(num1, num2);
        return resultadoSumar;
    }

    if (option === 'sub') {
        const resultadoRestar = subtract(num1, num2);
        return resultadoRestar;
    }

    if (option === 'multiply') {
        const resultadoMultiplicar = multiply(num1, num2);
        return resultadoMultiplicar;
    }

    const resultadoDividir = divide(num1, num2);
    return resultadoDividir;
}

let resultadoFinal = calculate('sum', 1, 2);
console.log('resultado final: ', resultadoFinal);


// Callbacks
// ¿Qué es una callback?
// Una callback es una función que se pasa como argumento a otra función y que se ejecuta después de que cierto proceso o tarea haya finalizado.
// Es como dejar un número de teléfono para que te llamen cuando algo esté listo.

// ¿Cómo se usa una callback?
// En JavaScript, las callbacks son comunes en situaciones donde se realiza una operación asíncrona, como cargar un archivo o realizar una solicitud a un servidor.
// En lugar de bloquear el código y esperar a que se complete la operación, se pasa una función callback que se ejecutará una vez que la operación haya terminado.

// Ejemplo de operación asíncrona
function saludar2() {
    console.log('hola como estas?');
}

setTimeout(saludar2, 3000);


// Ejemplo de operación síncrona. Función de orden superior.
// Una función de orden superior es aquella que acepta una función como argumento y/o devuelve una función.
function calcOperacionMatematica(a, b, callback) {
    console.log(a);
    console.log(b);
    console.log(callback);
    let resultado = a + b;
    callback(resultado);
}

const hacerLoQueSea = (resultado) => console.log(`el resultado: ${resultado}`);

calcOperacionMatematica(1, 2, hacerLoQueSea);

// Veamos como funciona el forEach por debajo
const animals = ['perro', 'gato'];

animals.forEach((animal) => console.log(animal));

function forEach(animals, callback) {
    for (let i = 0; i < animals.length; i++) {
        const element = animals[i];
        callback(element, i)
    }
}

forEach(animals, (element, i) => console.log(`${element}-${i}`));