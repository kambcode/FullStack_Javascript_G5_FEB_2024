const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  const response = await axios.get(API);

  const arrayPromises = response.data.results.map((pokemon) => {
    return axios.get(`${API}/${pokemon.name}`);
  });

  const responses = await Promise.all(arrayPromises);
}

main();
