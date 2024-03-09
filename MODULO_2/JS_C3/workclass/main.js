// OPERADORES LOGICOS
/*
    En el mundo de la programación, los operadores lógicos son herramientas que nos permiten tomar decisiones basadas en condiciones.
    Imaginemos que tenemos una caja mágica que puede responder preguntas con "sí" o "no".
    Los operadores lógicos son como las preguntas que haces a esta caja para tomar decisiones.
*/

// Operador AND (Y)
// El operador AND se utiliza cuando queremos asegurarnos de que dos condiciones sean verdaderas para que una acción se realice. 
// Es como decir: "¿Quiero ir al cine y tengo suficiente dinero?" Solo si tengo ambas cosas, podré ir al cine.
const quererIrAlCine = false;
const tenerDineroSuficiente = false;

if (quererIrAlCine && tenerDineroSuficiente) {
    console.log('Podemos ir al cine');
} else {
    console.log('No podemos ir al cine');
}


// Operador OR (O)
// El operador OR se utiliza cuando queremos que al menos una de dos condiciones sea verdadera para que una acción se realice.
// Es como decir: "¿Quieres un refresco o una limonada?" Si respondes "sí" a cualquiera de las opciones, ¡puedes tener algo para beber!
const quererRefresco = false;
const quererLimonada = true;

if (quererRefresco || quererLimonada) {
    if (quererRefresco) {
        console.log('Tomaré un refresco');
    } else {
        console.log('Tomaré limonada');
    }
} else {
    console.log('No queremos ni refresco ni limonada');
}

// Operador NOT (NO)
// El operador NOT se utiliza para negar una condición. Es como decir lo opuesto de lo que se pregunta.
// Por ejemplo, recordando el dicho popular que dice "Al que no quiere caldo, se le dan dos tazas"
// En la primera frase se puede deducir que se esta negando una afirmacion (querer caldo) y al negarlo
// la respuesta que obtendremos sera "se le dan dos tazas"
let quererCaldo = false;

if (!quererCaldo) {
    console.log('Se le dan dos tazas');
} else {
    console.log('Me encanta el caldo');
}

// CONDIION TERNARIA
const edad = 17;
console.log(edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad');

const ciudad = 'Neiva';
/*let gentilicio;
if (ciudad === 'Bogotá') {
    gentilicio = 'Rolo';
} else {
    gentilicio = 'Otro';
}*/
const gentilicio = ciudad === 'Bogotá' ? 'Rolo' 
   : ciudad === 'Medellin' ? 'Paisa' 
   : 'Otro';

console.log(gentilicio);

// OPERADORES NULLISH COALESCING (Fusion de nulos) ?? y ||
const tieneAlgo = false;
const validation1 = tieneAlgo ?? 'Otra cosa'; // Este es mas relajado y solo no permite null y undefined
// Esta es la forma mas imperativa del ejemplo anterior
let val;
if (tieneAlgo) {
    val = tieneAlgo;
} else {
    val = 'Otra cosa';
}
console.log('val::::: ', val);


const validation2 = tieneAlgo || 'Otra cosa'; // Este es mas estricto, no permite ningun valor falsy
console.log(validation1);
console.log(validation2);


// OPERADORES con AGRUPACION ()
// Al igual que en operaciones matematicas los parentesis tienen prioridad sobre las operaciones que
// estan encerradas dentro de ellos, es decir se deben resolver primero antes de continuar
console.log((true && false) || true); // true
console.log(false || true && (true && true)); // true
console.log((true || false) && true && (false && true && true)); // false


// RETOS
// 1. !false && (!false || !!false)
// 1.1 !false = true
// 1.2 (!false || !!false) = (true || false)
// 1.3 true && (true || false)
// 1.4 (true || false) = true
// 1.5 true && true = true
console.log(!false && (!false || !!false));

// 2. ((false || false || false) && (false || true || false)) && true
// 2.1 (false || false || false) = false
// 2.2 (false || true || false) = true
// 2.3 (false && true) = false
// 2.4 false && true = false
console.log(((false || false || false) && (false || true || false)) && true)

// 3. true && true || (!!true && !false) && ((!true && false) || false)
// 3.1 true && true = true
// 3.2 (!!true && !false) = (true && true)
// 3.3 (true && true) = true
// 3.4 ((!true && false) || false)
// 3.5 (!true && false) = false
// 3.6 (false || false) = false
// 3.7 true || true && false = true || false
// 3.8 true || false = true
console.log(true && true || (!!true && !false) && ((!true && false) || false));


// ORDEN DE PRIORIDAD
// 1. ! negacion
// 2. () parentesis
// 3. && conjuncion
// 4. || disyuncion


// TABLAS DE VERDAD
/*
   Las tablas de verdad son herramientas utilizadas en lógica para analizar y entender el comportamiento de proposiciones lógicas.
   Básicamente, muestran todas las posibles combinaciones de valores de verdad para las variables en una expresión lógica y cómo esos valores afectan el resultado de la expresión completa.
   En resumen, las tablas de verdad nos ayudan a determinar si una afirmación lógica es verdadera o falsa en función de diferentes escenarios.
*/

// Negación (¬): Representa la negación de una proposición. Si una proposición es verdadera, su negación es falsa, y viceversa.
/*
    p   q   ¬p   ¬q
    V   V    F    F
    V   F    F    V
    F   V    V    F
    F   F    V    V
*/

// Conjunción (∧): Representa la operación "y". La conjunción de dos proposiciones es verdadera solo cuando ambas son verdaderas; en cualquier otro caso, es falsa.
/*
    p   q    p   ∧   q
    V   V        V
    V   F        F
    F   V        F
    F   F        F
*/

// Disyunción (∨): Representa la operación "o". La disyunción de dos proposiciones es verdadera si al menos una de ellas es verdadera.
/*
    p   q    p   v   q
    V   V        V
    V   F        V
    F   V        V
    F   F        F
*/

// Implicación / Condicional / Si, entonces (→): Representa la operación de implicación lógica. En una implicación "p → q", 
// si la proposición "p" es verdadera, entonces "q" debe ser verdadera para que la implicación sea verdadera.
// Sin embargo, si "p" es falsa, la implicación se considera verdadera independientemente del valor de "q".

// Ejemplo:
//   Si juegas como messi (p),
//   entonces serás futbolista profesional (q)
/*
    p   q    p   ->   q
    V   V        V
    V   F        F
    F   V        V
    F   F        V
*/


// Doble implicación (↔): Representa la operación de doble implicación lógica, también conocida como "si y solo si".
// En "p ↔ q", tanto "p" como "q" deben tener el mismo valor de verdad (ambas verdaderas o ambas falsas) para que la doble implicación sea verdadera.
// Ejemplo: 
//   Te llevaré al parque (p), 
//   si y solo si te tomas la sopa (q)
/*
    p   q    p   <->   q
    V   V         V
    V   F         F
    F   V         F
    F   F         V
*/