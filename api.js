const fetch = require('node-fetch');

const fetchPokemon = (name) => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => Promise.resolve(res.json()))
    .catch(error => error)

module.exports = fetchPokemon;
