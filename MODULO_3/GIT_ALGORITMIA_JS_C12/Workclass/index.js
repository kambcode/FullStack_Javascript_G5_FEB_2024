// Contexto global
// var variable_global = 0; // NO SE DEBE USAR
// let variable_global2_ = 1;
// const constante_global = 2;

// // Contexto de funcion o de bloque
// function miPrimerafuncion () {
//   let variable_local = 1;
//   const constante_local = 2;
// }

// // Funcion flecha
// const miFuncion = () => console.log('hola mundo');

// // callback
// function callbackSuma (a,b) {
//   console.log(`La suma es = ${a + b}`)
// }

// function Calculadora (Num1, Num2, operacion) {
//   // operaciones adicionales
//   // ...
//   operacion(Num1, Num2)
// }

// Calculadora(1,2, callbackSuma);

// Promesas
// Metodos resolutores then y catch

// Async/await

// Closures
// Una funcion que mantiene una referencia a las varibales del ambito lexico
// donde se encuentran, sin importar qeu la funcion principal ya hubiera terminado de
// Ejecutarse

function outerFunction() {
  // proceso internos
  // Declarar muchas variables
  let outerVariable = "Soy una variable externa";

  function innerFunction() {
    let innerVariable = "Soy una variable interna";
    console.log("outerVariable", outerVariable);
    console.log("innerVariable", innerVariable);
  }
  return innerFunction;
}

const closure = outerFunction();
// console.log(closure);
// closure();

// Manejadore de sesiones de usuario

const sessions_storage = [
  "juliancho23|123456",
  "eri23|654321",
  "usuarioN|passN",
];

function sessionManager() {
  let sessions = [];
  function createSession(username, password) {
    const sessionId = generateSessionId(username, password);

    if (sessions_storage.indexOf(sessionId) === -1) {
      return `El usuario ${username} no se ha registrado`;
    }

    sessions.push({ sessionId: sessionId, username: username });
    console.log("Current Sessions", sessions);
    return sessionId;
  }
  function getUsername(sessionId) {
    return sessions
      .filter((session) => session.sessionId == sessionId)
      .map((session) => session.username)[0];
  }
  function generateSessionId(username, password) {
    return `${username}|${password}`;
  }

  return {
    createSession,
    getUsername,
  };
}
const manageSession = sessionManager();

const sessionId1 = manageSession.createSession("juliancho23", "123456");
const sessionId2 = manageSession.createSession("eri23", "654321");
// ...
const sessionIdN = manageSession.createSession("usuarioN", "passN");
// USUARIO QUE NO SE HA REGISTRADO
const unregister = manageSession.createSession("Farid", "2039");
// Averiguando el usuario
console.log(
  "El primer usuario logueado es",
  manageSession.getUsername(sessionId1)
);
console.log(
  "El segundo usuario logueado es",
  manageSession.getUsername(sessionId2)
);
console.log("El N usuario logueado es", manageSession.getUsername(sessionIdN));

console.log(unregister);
