// If else if
// Un programa que calcule el precio de entrada a un museo

//  30 UDS -> menores de 14 años
//  100 USD -> personas entre 14 y 50 años
//  50 USD -> mayores de 50

/*const age = prompt('Ingresa tu edad');

if (age < 14) {
    document.write('Precio: 30 USD');
} else if (age >= 14 && age <= 50) {
    document.write('Precio 100 USD');
} else {
    document.write('Precio: 50 USD');
}*/

//document.write('<br><br>');

// Escribir un programa para clasificar a las personas segun su edad: bebé, niño, adolescente, adulto y anciano
const edad = Number(prompt("Escribe tu edad"));

if (edad <= 2) {
    document.write('Eres un bebé');
} else if (edad > 2 && edad <= 11) {
    document.write('Eres un niño');
} else if (edad > 11 && edad <= 17) {
    document.write('Eres un adolescente');
} else if (edad > 17 && edad <= 50) {
    document.write('Eres un adulto');
} else {
    document.write('Eres un anciano');
}