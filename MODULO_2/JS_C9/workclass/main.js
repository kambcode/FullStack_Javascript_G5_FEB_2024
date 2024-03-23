// OBJETOS
// Los objetos en JavaScript son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas.
// Comparados con otros tipos de datos como strings, números y booleanos, los objetos pueden contener múltiples valores y métodos.

// Sintaxis
const objeto = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['perro', 'gato', 'elefante'],
    saludar() {
        console.log('hello world');
    },
    saludar2: function() {
        console.log('hello world 2');
    },
    objetoInterno: {
        a: 1,
        b: 'hola',
    }
};

// La forma antigua de hacerlo
let persona = {};
persona.nombre = 'Juan';
persona.apellido = 'Rodriguez';
persona.edad = 20;
persona.nacionalidad = 'colombiana';

// Acceder a las propiedades: objeto.propiedad.?.?.?
console.log(objeto.edad);
console.log(objeto.animales);
console.log(objeto.objetoInterno.b);
console.log(objeto.saludar());
console.log(persona);
persona.profesion = 'ingeniero';
console.log(persona);

// Otras formas de crear objetos
// Object.create
const infoPersona = {
    nombre: 'Ana',
    apellido: 'Correa',
    edad: 20,
    direccion: 'Calle 2da',
    ciudad: 'Bogotá'
};


const infoProfesion = Object.create(infoPersona);
infoProfesion.profesion = 'ingeniera civil';
infoProfesion.añosExperiencia = 7;
infoProfesion.cargo = 'jefa';
console.log(infoProfesion.profesion);
console.log(infoProfesion.añosExperiencia);
console.log(infoProfesion.cargo);
console.log(infoProfesion);

console.log(infoProfesion.nombre); // Ana
infoProfesion.nombre = 'Luisa';
console.log(infoProfesion.nombre); // Luisa
infoProfesion.nombre = 'Manuela';
console.log(infoProfesion.nombre); // Manuela
console.log(infoPersona.nombre);

//let person = {};
//const nombre = prompt('Ingrese el nombre');
//person.nombre = nombre;


// Object.assign
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

const resultado = Object.assign({ z: 1 }, objeto1, objeto2, objeto3); // resultado -> { z: 1, a: 1, b: 3, c: 5, d: 6 }
console.log(resultado);
resultado.w = 5;
console.log(resultado);

// Object.freeze
const personaFreeze = {
    nombre: 'Cesar',
    edad: 30,
    animales: ['perro', 'gato']
};

Object.freeze(personaFreeze);
personaFreeze.nombre = 'Pedro'; // No tiene efecto, no se permite modificar propiedades
personaFreeze.edad = 21;
personaFreeze.direccion = "sfdsf"; // No tiene efecto, no se permite añadir propiedades
personaFreeze.animales.push('iguana'); // Si se agrega porque no modifico el valor entero de la variable (no modifica la referencia en memoria), solo agrego un elemento mas
personaFreeze.animales = []; // No tiene efecto, porque no se permite modificar propiedades
console.log(personaFreeze);


// Otros metodos de los objetos
// Object.keys
console.log(Object.keys(personaFreeze)); // retorna un array de los nombres de las propiedades: [ 'nombre', 'edad', 'animales' ]
for (let i = 0; i < Object.keys(personaFreeze).length; i++) {
    const element = Object.keys(personaFreeze)[i];
    if (element !== 'apellido') {
        console.log('No existe la propiedad apellido');
    }
}

// Object.values
console.log(Object.values(personaFreeze)); // retorna un array de los valores de las propiedades: [ 'Cesar', 30, [ 'perro', 'gato', 'iguana' ] ]
for (let i = 0; i < Object.values(personaFreeze).length; i++) {
    const value = Object.values(personaFreeze)[i];
    if (value !== 'Juan' && typeof value === 'string') {
        console.log('No existe el value Juan');
    }
}

// Object.entries
console.log(Object.entries(personaFreeze)); // retorna un array en el cada posicion es un array de 2 items con el nombre (posicion 0) y valor (posicion 1)


// Referencia vs valor en objetos
const object1 = { a: 1, b: true };
const object2 = { a: 1, b: true };
const object3 = object1; // object3 -> object1 -> { a: 1, b: true }
console.log(object3.a);

console.log(object1 === object2);
console.log(object3 === object1);

// Que pasa si cambio algun dato de una propiedad o agrego una nueva en object3? afecta a object1?
object3.a = 78;
console.log(object3.a); // 78, cambia el valor en object3
console.log(object1.a); // 78, tambien afecta ese cambio a object1

// Como lo evito?
const object4 = Object.create(object1);
object4.a = 45;
console.log(object4.a); // 45, cambia el valor en object4
console.log(object1.a); // 78, no afecta el cambio a object1

