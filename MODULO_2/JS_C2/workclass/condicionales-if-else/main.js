// Los condicionales son un tipo de estructura de control que nos permiten 
// tomar decisiones dependiendo del resultado de una condicion
// if (condicion) {
// ...    
// } else {
// ...
// }
// Tambien podemos negar una condicion con el signo !, que 
// basicamente cambia el valor del booleano que lo acompaña
const firstCondition = !true; // false
const secondCondition = !false; // true

const userAge = Number(prompt('Digita tu edad en años'));
const userGender = prompt('Ingresa tu género M/F');
const minAge = 18;

console.log('El usuario es menor de edad: ', userAge < minAge);
console.log('El usuario es masculino: ', userGender === 'M');

const esMenorEdad = userAge < minAge;
const esMasculino = userGender === 'M';

if (esMenorEdad) {
    console.log('Si, es menor de edad');
} else {
    console.log('Eres mayor de edad, puedes ingresar');
}

// Else if
// if (condicion) {
// ...
// } else if (condicion) {
// ...    
// } else {
// ...
// }

if (esMenorEdad) {
    console.log('Es menor de edad');
} else if (esMasculino) {
    console.log('Eres mayor de edad y masculino');
} else {
    console.log('Eres mayor de edad y femenino');
}

// Condicionales anidados: podemos agregar condiciones dentro de otra condición
if (esMenorEdad) {
    if (esMasculino) {
        console.log('Es menor edad y es masculino');
    } else {
        console.log('Es menor de edad y es femenino');
    }
} else {
    if (esMasculino) {
        console.log('Eres mayor de edad y masculino');
    } else {
        console.log('Eres mayor de edad y femenino');
    }
}


// RETO
// Escribir un programa que pregunte
// la talla de una camiseta (s, m)
// y el genero de la camiseta (male, female)

// El programa debe mostrar la cantidad disponible en stock
// Camiseta talla S => 30 male, 32 female
// Camisetas talla M => 10 male, 8 female

const size = prompt('Ingresa un tamaño de camiseta');
const gender = prompt('Ingresa un genero de camiseta');

const isSizeS = size == 's'; //isSizeS = true o false
const isSizeM = size == 'm';
const isMale = gender == 'male';
const isFemale = gender == 'female';

if (isSizeS) {
    if (isMale) {
        document.write('Hay 30 camisetas disponibles para hombre');
    }

    if (isFemale) {
        document.write('Hay 32 camisetas disponibles para mujer');
    }
}

if (isSizeM) {
    if (isMale) {
        document.write('Hay 10 camisetas disponibles para hombre');
    }

    if (isFemale) {
        document.write('Hay 8 camisetas disponibles para mujer');
    }
}



