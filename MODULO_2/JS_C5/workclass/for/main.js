
// CICLOS (LOOPS)
// En JavaScript, los ciclos son estructuras de control que te permiten ejecutar un bloque de código varias veces.
// Son herramientas poderosas para automatizar tareas repetitivas.
// Hay varios tipos de ciclos en JavaScript, pero los más comunes son el ciclo for, el ciclo while y el ciclo do...while.


// 1. FOR ——————————————————————————————————————————————————————————————————-
// Este ciclo se utiliza cuando conoces exactamente cuántas veces quieres repetir una tarea.
// Por ejemplo, si quieres imprimir los números del 1 al 5, puedes usar un ciclo for así:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// i = 1 -> 1 <= 10 -> true -> i = 2
// i = 2 -> 2 <= 10 -> true -> i = 3
// i = 3 -> 3 <= 10 -> true -> i = 4
// i = 4 -> 4 <= 10 -> true -> i = 5
// ...
// i = 10 -> 10 <= 10 -> true -> i = 11
// i = 11 -> 11 <= 10 -> false -> finaliza el ciclo

// console.log(i); -> Error porque no esta en el scope global si no el scope del for
console.log('Fin del ciclo for');

// Este ciclo tiene tres partes:
// let i = 1;: Aquí se inicializa una variable i con el valor 1. Esta variable se utiliza como contador.
// i <= 10;: Esta es la condición que debe cumplirse para continuar ejecutando el ciclo. Mientras i sea menor o igual a 10, el ciclo seguirá ejecutándose.
// i++: Después de cada iteración, incrementamos i en 1.

// FOR hacia atrás
// 10
// 9
// 8
// 1
for (let i = 10; i >= 1; i--) {
    // Todo lo que va aqui dentro es el codigo que se ejecutará n veces
    console.log(i);
}

console.log('Fin de ciclo for hacia atras');

// let vs var en ciclos for
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(i);


// RETO
// Escribe un ciclo for que imprima los números pares del 1 al 20 en la consola.
// 10 % 2 === 0 -> true (par)
// 11 % 2 === 0 -> false (impar)
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}

for (let i = 2; i <= 20; i += 2) {
    // i += 2 -> i = i + 2
    console.log(i);
}

// i = 2 -> 2 <= 20 -> true -> i = 4
// i = 4 -> 4 <= 20 -> true -> i = 6
// ...
// i = 20 -> 20 <= 20 -> true -> i = 22
// i = 22 -> 22 <= 20 -> false -> Final del ciclo

console.log('Fin del ciclo para encontrar los pares');