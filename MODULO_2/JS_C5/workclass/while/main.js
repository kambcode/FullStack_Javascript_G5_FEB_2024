// 2. WHILE ——————————————————————————————————————————————————————————————————-
// Se utiliza cuando no sabes cuántas veces se repetirá la tarea, pero tienes una condición que debe cumplirse para continuar.
// Por ejemplo, si quieres imprimir los números pares hasta que llegues a 10, puedes usar un ciclo while así:
let contador = 1;

while(contador <= 10) {
    console.log(contador);
    contador++;
}

let numero = 2;

while(numero <= 20) {
    console.log(numero);
    numero += 2;
}

// En este caso, la condición se evalúa antes de cada iteración. Mientras la condición (numero <= 10) sea verdadera, el ciclo seguirá ejecutándose.


// RETO
// Escribe un programa que permita al usuario ingresar un número y mostrar en pantalla su tabla de multiplicar
const number = Number(prompt('Ingresa un número'));
let count = 1;

while(count <= 10) {
    document.write(`<h5>${number} x ${count} = ${number * count}</h5>`);
    count++;
}

document.write(`Fin de la tabla del ${number}`);


let num1 = Number(prompt(`Pon tu numero`));
let i = 1;
while (i <= 10) {
    // i++ -> solo asignas un nuevo valor, el cambio no es inmediato
    // ++i -> asigna un nuevo valor y actualiza el valor en la misma línea
    let operacion =  i * num1;
    document.write(`<p>${num1} x ${i} = ${operacion}</pr>`);
    i++;
}

// Escribe un programa que capture la contraseña y valide si es válida o no usando un ciclo while para que obligue al usuario a ingresar la contraseña hasta que sea correcta.
/*function validarContraseña() {
    const password = prompt
    if (password === 'password'){

    } else {
        validarContraseña()
    }
}*/

let password = prompt('Ingresa contraseña');

while(password !== 'contraseña') {
    password = prompt('Ingresa contraseña');
}

document.write('<h1>Bienvenido a la página</h1>');


