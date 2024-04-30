const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

function main() {
  let pokemon1 = {};
  axios
    .get(API)
    .then((response) => {
      const pokemonName = response.data.results[0].name;
      pokemon1.name = pokemonName;
      console.log(pokemon1);
      //segunda promesa
      return axios.get(`${API}/${pokemonName}`);
    })
    .then((response) => {
      pokemon1 = { ...pokemon1, ...response.data };
      console.log(pokemon1);
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

main();

const API_Productos = "https://fakestoreapi.com/products/1";

function main2() {
  axios
    .get(API_Productos)
    .then((response) => {
      const nombre_produto = response.data.title;
      console.log(nombre_produto);
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

main2();
