const { default: axios } = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

// Pasos de la tarea

// - traer los primeros 20 pokemons
// - guardar el resultado en una variable pokemon
// - iterar por cada pokemon y traer la info individual
// - actualizar el array pokemons

function main() {
  const pokemons = [];
  axios
    .get(API)
    .then((response) => {
      //spread operator
      pokemons.push(...response.data.results);

      const promises = pokemons.map((pokemon) => {
        return axios.get(`${API}/${pokemon.name}`);
      });

      // Promise.all recibe un array de promesas y devuelve un array de respuestas
      Promise.all(promises).then((responses) => {
        // map itera cada pokemon y devuelve un nuevo array con los nuevos valores
        const pokemonsFull = pokemons.map((pokemon) => {
          // find encuentra la data de cada pokemon
          const response = responses.find(
            (response) => response.data.name === pokemon.name
          );

          // aquí creamos el nuevo objeto con toda la data
          return { ...pokemon, ...response.data };
        });

        console.log("RESPUESTA FINAL: ", pokemonsFull);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// main();

// QUEREMOS OBTENER los 1302 pokemones sin detalle
// Dentro de la respuesta de ese api exite el parametro next y es null
// cuando ya no hay mas información que devolver
const API_PAGINADO = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

function AllPokemon() {
  console.time("inicio_largo");
  const pokemons = [];
  let peticiones = [];
  let offset = 0;
  while (offset < 1302) {
    peticiones.push(
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    );
    offset += 20;
  }
  Promise.all(peticiones).then((responses) => {
    for (const response of responses) {
      pokemons.push(...response.data.results);
    }
    console.log(pokemons);
  });
  console.timeEnd("inicio_largo");
}
AllPokemon();
