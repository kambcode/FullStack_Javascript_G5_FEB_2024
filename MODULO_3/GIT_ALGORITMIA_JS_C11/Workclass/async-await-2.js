const { default: axios } = require("axios");
// ASYNC/AWAIT
// Es una forma en que javascript nos permite gestionar codigo asincrono, de
// manera sincrona

// SINTAXIS BASICA
// async function NombreFuncion () {
//  Proceso asincrono
//  const pokemones = await axios.get('urlservicio')
// }
function handlerTime(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

function main() {
  const promiseMessage1 = handlerTime("primera respuesta", 1000);
  const promiseMessage2 = handlerTime("segunda respuesta", 2000);
  const promiseMessage3 = handlerTime("tercera respuesta", 3000);

  console.log("hola 1");

  promiseMessage1.then((response) => {
    console.log(response);
  });

  console.log("hola 2");

  promiseMessage2.then((response) => {
    console.log(response);
  });

  console.log("hola 3");

  promiseMessage3.then((response) => {
    console.log(response);
  });

  console.log("hola 4");
}

// main();

async function mainAwait() {
  console.log("hola 1");
  const response1 = await handlerTime("primera respuesta", 1000);
  console.log(response1);
  console.log("hola 2");
  const response2 = await handlerTime("segunda respuesta", 2000);
  console.log(response2);
  console.log("hola 3");
  const response3 = await handlerTime("tercera respuesta", 3000);
  console.log(response3);
  console.log("hola 4");
}

// mainAwait();

async function parallelAwait() {
  console.log("hola 1");
  const responses = await Promise.all([
    handlerTime("primera respuesta", 1000),
    handlerTime("segunda respuesta", 2000),
    handlerTime("tercera respuesta", 3000),
  ]);

  responses.forEach((response) => {
    console.log(response);
  });

  console.log("hola 2");
}

// parallelAwait();

// QUEREMOS OBTENER los 1302 pokemones sin detalle
// Dentro de la respuesta de ese api exite el parametro next y es null
// cuando ya no hay mas información que devolver
async function AllPokemon() {
  const pokemons = [];
  let peticiones = [];
  let offset = 0;
  while (offset < 1302) {
    peticiones.push(
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    );
    offset += 20;
  }
  await Promise.all(peticiones).then((responses) => {
    for (const response of responses) {
      pokemons.push(...response.data.results);
    }
  });

  console.log("pokemons", pokemons);
}
// AllPokemon();

const API_PAGINADO = "https://pokeapi.co/api/v2/pokemon";
async function AllPokemonNext() {
  console.time("inicio");
  const pokemons = [];
  let next = API_PAGINADO;
  while (next != null) {
    let response = await axios.get(next);
    pokemons.push(...response.data.results);
    console.log(next);
    next = response.data.next;
  }
  console.log("pokemons", pokemons);
  console.timeEnd("inicio");
}
AllPokemonNext();
