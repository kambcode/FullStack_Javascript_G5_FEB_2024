let edad = 18;
edad = 10;
edad = 5;
// let edad = 15; -> Esto es un error para js ya que no puedes redeclarar una variable creada con let
console.log(edad);
let profesion;
console.log(profesion); // undefined

const nombre = 'Juan';
// nombre = 'Leandro'; -> Esto lanzara un error ya que una variable declarada con const no se puede reasginar
// const ciudad; -> Cuando declaras una variable con const debes asignarle un valor inmediatamente

var ciudad = 'Bogotá';
ciudad = 'Armenia';
ciudad = 'Medellín';
var ciudad = 'Neiva';
console.log(ciudad);
var animal;
console.log(animal); // undefined

// Funciones -> conjunto de instrucciones que van delimitadas por unas llaves {}. Deben tener un nombre unico.
// Declarar funcion
function cualquiera(parametro1, parametro2) {
    console.log('param1: ', parametro1);
    console.log('param2: ', parametro2);
}
// Ejecutar funcion
// parametro1 = 'ClaseJS';
// parametro2 = 4;
cualquiera('Clase JS', 4);

// El "scope" en JavaScript se refiere al alcance de una variable, es decir, dónde en tu código puedes usar y acceder a esa variable.
// Imagina que tienes un montón de cajas, cada una con un nombre escrito en ella.
// El "scope" sería como el lugar donde puedes ver y usar esas cajas.
// En Js los scopes se determinan por las llaves { } (Scope de bloque) o por funciones (Scope de funcion).
// Todos parten de un scope global (donde se empieza a ejecutar un programa)


// Scope de bloque
let objeto = 'Computador';
console.log('objeto: ', objeto);

if (true) {
    console.log('objeto dentro del if: ', objeto);
}

if (true) {
    if (true) {
        console.log('objeto dentro if anidado: ', objeto);
    }
}

// Javascript, cuando se encuentra con multiples scopes anidados, verifica las variables de adentro hacia afuera
// Si no existe una variable en el scope mas interno (inner scope) la buscará en el scope mas externo (outer scope)

// Shadowing -> Cuando una variable declara en un scope interno opaca a otra que esta declarada en un scope externo con el MISMO nombre
let fruta = 'Fresa';

if (fruta === 'Fresa') {
    let fruta = 'Mango';
    let fruta2 = 'Limon';
    console.log('fresa dentro del if: ', fruta);
}

console.log('fruta desde scope global: ', fruta);
// console.log(fruta2); -> fruta2 no existe en el scope global



// Scope de función
let estudiante = 'Nelson';

function doSomething() {
    let estudiante2 = 'Karina';
    console.log('estudiante1: ', estudiante);
    console.log('estudiante2: ', estudiante2);
}

doSomething();

console.log(estudiante);
// console.log(estudiante2); -> Error porque esta variable esta declarada dentro del scope de la funcion doSomething y no en el scope global

// var vs let en scopes
let car = 'Ferrari';
function printCar() {
    if (true) {
        var car2 = 'Audi';
        let car3 = 'BMW';
        console.log('desde scope interno car1: ', car);
        console.log('desde scope interno ca2: ', car2);
        console.log('desde scope interno car3: ', car3);
    }

    console.log('desde scope externo car1: ', car);
    console.log('desde scope externo ca2: ', car2);
    console.log('desde scope externo car3: ', car3);
}

printCar();
// console.log(car2); -> Error porque esta variable esta declarada dentro del scope de la funcion printCar y no el scope global



// RETO
// Explicar el siguiente codigo con tus palabras
// Cuantos scopes hay?
// Cuantas variables hay y donde se pueden usar?
// Lexical Scope -> Decisiones que toma el desarrollador al momento de escribir el codigo: con que nombre declaro las variables, donde las uso, donde declaro y ejecuto las funciones
function foo(a) {
    var b = a * 2;

    // En JS se pueden declarar y ejecutar funciones dentro de otras funciones
    function bar(c) {
        let d = 1 + 7;
        console.log(a, b, c, d); // 2, 4, 12, 8
    }

    bar(b * 3);
}

foo(2);


// Que pasa si saco la funcion interna (bar) al scope global? 
function bar2(c) {
    let d = 1 + 7;
    console.log('bar 2');
    console.log(a, b, c, d); // undefined, undefined, 30, 8
}

function foo2(a) {
    var b = a * 2;
    bar2(b * 3);
}

foo2(5);