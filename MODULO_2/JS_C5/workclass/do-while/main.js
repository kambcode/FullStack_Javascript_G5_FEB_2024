// DO ... WHILE
// Es similar al ciclo while, pero la diferencia principal es que la condición se evalúa después de cada iteración, 
// lo que significa que el bloque de código se ejecutará al menos una vez, incluso si la condición es falsa desde el principio.
// Por ejemplo, si quieres pedirle al usuario que ingrese un número entre 1 y 10, puedes usar un ciclo do...while así:
let number;

do {
    number = Number(prompt('Ingrese un número del 1 al 10'));
} 
while (number < 1 || number > 10);


// RETO
// Escribe un programa que capture la contraseña y valide si es válida o no usando un ciclo while para que obligue al usuario a ingresar la contraseña hasta que sea correcta.
let password;
do {
    password = String(prompt('Ingrese contraseña'));
} while (password !== 'Kambcode');

document.write('<h1>Bienvenido a la página</h1>');