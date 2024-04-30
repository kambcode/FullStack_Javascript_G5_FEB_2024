const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";
const pokemons = [];
const pokemonsFull = [];

function main() {
  axios
    .get(API)
    .then((response) => {
      pokemons.push(...response.data.results);
      const pokemonName = response.data.results[0].name;
      //segunda promesa
      return axios.get(`${API}/${pokemonName}`);
    })
    .then((response) => {
      for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].name === response.data.name) {
          pokemonsFull.push({ ...pokemons[i], ...response.data });
        } else {
          pokemonsFull.push(pokemons[i]);
        }
      }

      console.log(pokemonsFull);
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

main();
