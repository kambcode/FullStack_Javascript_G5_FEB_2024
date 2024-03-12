// Switch
/*
    switch(value) {
        case (condition):
            ...
            break;
        case (condition2):
            ...
            break;
        default:
            ...
            break;
    }
*/

// Escribir un programa para clasificar a las personas segun su edad: bebé, niño, adolescente, adulto y anciano
// const edad = Number(prompt("Escribe tu edad"));

// Evaluando valores booleanos
/*switch(true) {
    case (edad <= 2):
        document.write('Eres un bebé');
        break;
    case (edad > 2 && edad <= 11):
        document.write('Eres un niño');
        break;
    case edad > 11 && edad <= 17:
        document.write('Eres un adolescente');
        break;
    case edad > 17 && edad <= 50:
        document.write('Eres un adulto');
        break;
    default:
        document.write('Eres un anciano');
        break;
}*/


// RETO
// Escribir un programa para verificar cuantas camisetas disponibles hay por genero
// niño -> 1 camiseta disponible
// niña -> 2 camisetas disponibles
// mujer -> 3 camisetas disponibles
// hombre -> 4 camisetas disponibles

//const genero = prompt('Escribe tu género (Niño, Niña, Mujer, Hombre)').toLowerCase();

/*switch (true) {
    case (genero === 'niño'):
        document.write('1 camiseta disponibles')        
        break;
    case (genero === 'niña'):
        document.write('2 camiseta disponibles')        
        break;
    case (genero === 'mujer'):
        document.write('3 camiseta disponibles')        
        break;
    case (genero === 'hombre'):
        document.write('4 camiseta disponibles')
        break;
    default:
        document.write('No entendí');
        break;
}*/

// Evaluar valores strings
/*switch (genero) {
    case 'niño':
        document.write('1 camiseta disponibles')        
        break;
    case 'niña':
        document.write('2 camiseta disponibles')        
        break;
    case 'mujer':
        document.write('3 camiseta disponibles')        
        break;
    case 'hombre':
        document.write('4 camiseta disponibles')
        break;
    default:
        document.write('No entendí');
        break;
}*/

// Evaluando números
const suma = 1 + 2;

switch (5) {
    case 0:
        document.write(suma);
        break;
    case 1:
        document.write(suma);
        break;
    case 3:
        document.write(suma);
        break;
    default:
        document.write('Nada')
        break;
}