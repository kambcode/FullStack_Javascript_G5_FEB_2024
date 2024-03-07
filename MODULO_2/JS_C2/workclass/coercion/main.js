// La coerción en JavaScript ocurre cuando se produce una conversión automática de un tipo de dato a otro tipo de dato.
// Esto se aplica al momento de hacer operaciones o comparaciones entre valores de diferentes tipos.
// Existen dos tipos de coerción: la coerción implícita y la coerción explícita.

// COERCION IMPLICITA
/*
    Es la conversion automatica de un tipo de dato a otro y esta a cargo de Javascript. Si el lenguaje encuentra alguna incoherencia
    al momento de hacer una operacion o comparacion ('10' + 1), lo interpreta a su manera y retorna un valor que puede ser erróneo
*/
console.log(4 + '7'); // '47'
console.log(4 * '7'); // 28
console.log(2 + true); // 3
console.log('2' + true); // '2true'
console.log(false - 3); // -3

console.log(!4); // false
console.log(true == 1); // true. Con el doble igual js hace la coercion
console.log('1' === 1); // false. Con el triple igual le indicamos a js que no haga coercion porque queremos comprobar el tipo de dato
console.log(1 === 1); // true

// COERCION EXPLICITA
/*
    La coerción explícita es la transformación de tipos de datos que controlamos el resultado.
    Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean()
    para convertir a tipo número, string y lógico, respectivamente.
*/

// Evaluemos String
console.log('explicita string 1: ', String(1)); // '1'
console.log('explicita string 2: ', String(true)); // 'true'
console.log('explicita string 3: ', String(false)); // 'false'
console.log('explicita string 4: ', String(null)); // 'null'
console.log('explicita string 5: ', String(undefined)); // 'undefined'

// Operaciones
const world = 'world!';
console.log("hello " + world);
console.log(`hello ${world}`);

// Evaluemos Boolean

// Falsy values
console.log(Boolean('')); false
console.log(Boolean(0)); false
console.log(Boolean(-0)); false
console.log(Boolean(NaN)); false
console.log(Boolean(null)); false
console.log(Boolean(undefined)); false
console.log(Boolean(false)); false

// Truthy values
console.log(Boolean('algo')); true
console.log(Boolean(1)); true

// Operaciones
console.log(!false); // true
console.log(!!false); // false
console.log(true && false); // AND -> true
console.log(false || 'dasd'); // OR -> 'dasd'


// Evaluemos Number
console.log(Number(1)); // 1
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Operaciones
console.log(5 + 5);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);