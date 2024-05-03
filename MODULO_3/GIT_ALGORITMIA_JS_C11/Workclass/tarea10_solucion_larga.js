const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";
const pokemons = [];
const pokemonsFull = [];

function main() {
  axios
    .get(API)
    .then((response) => {
      pokemons.push(...response.data.results);
      console.log(pokemons);
      const pokemonName = response.data.results[0].name;
      console.log(pokemonName);
      //segunda promesa
      return axios.get(`${API}/${pokemonName}`);
    })
    .then((response) => {
      // console.log(response.data);
      pokemonsFull.push({ ...pokemons[0], ...response.data });
      // for (let i = 0; i < pokemons.length; i++) {
      //   if (pokemons[i].name === response.data.name) {
      //     pokemonsFull.push({ ...pokemons[i], ...response.data });
      //   } else {
      //     pokemonsFull.push(pokemons[i]);
      //   }
      // }
      //tercera promesa
      return axios.get(`${API}/${pokemons[1].name}`);
    })
    .then((response) => {
      // console.log(response.data);
      pokemonsFull.push({ ...pokemons[1], ...response.data });
      // for (let i = 0; i < pokemons.length; i++) {
      //   if (pokemons[i].name === response.data.name) {
      //     pokemonsFull.push({ ...pokemons[i], ...response.data });
      //   } else {
      //     pokemonsFull.push(pokemons[i]);
      //   }
      // }
      console.log(pokemonsFull);
      // CONTINUAR COPIANDO LOS THEN PARA IR HACIENDO EL LLAMDO CORRESPONDIENTE
      // DE CADA POKEMON HASTA LLEGAR AL 20
      // return axios.get(`${API}/${pokemons[2].name}`);
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

main();
