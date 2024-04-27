// Callbacks

// Una función que se ejecuta dentro de otra función

function logger(message) {
  console.log(message);
}

function upperCase(mg, cb) {
  mg = mg.toUpperCase();
  cb(mg);
}

function lowerCase(letras, cb) {
  letras = letras.toLowerCase();
  cb(letras);
}

const message = "Hola mundo";
const message2 = "Hola mundo";
const message3 = "Hallo Welt";

// upperCase(message, logger);
// upperCase(message2, logger);
// upperCase(message3, logger);

const message4 = "HOLA MUNDO";
const message5 = "HELLO WORLD";
const message6 = "HALLO WELT";

lowerCase(message4, logger);
lowerCase(message5, logger);
lowerCase("HALLO WELT", logger);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function despedirnos(nombre) {
  console.log(`Adios ${nombre}`);
}

function conversar(nombrePersona, accion) {
  accion(nombrePersona);
}

// conversar("david", saludar);
// conversar("david", despedirnos);
