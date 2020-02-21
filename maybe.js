const fetchPokemon = require('./api.js');
const R = require('ramda'),
    path = R.path,
    prop = R.prop,
    _ = R._;

class Maybe {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }

  map(callback) {
    if(this.isNothing()) {
      return Maybe.of(null);
    }

    return Maybe.of(callback(this._value));
  }
}

/* const compose = (f, g) => object => f(g(object))

const getBy = (object, by) => prop(object, by)
const getValue = (object, pathWay) => path(pathWay, object)

const getSprites = pipe()

const pipe = (...functions) => valueToBeMutated => functions.reduce((accumulatedPreviousFunctions, currentFunc => currentFunc(aaccumulatedPreviousFunctions), valueToBeMutated))


const familyNames = ['jackson', 'smiths', 'paggi', 'adler'];

console.log(Maybe.of(familyNames).map(val => val));

fetchPokemon('pikachu').then(pokemon => {
  console.log('sprites............. ', getSprites(pokemon))
 // console.log('............ ', getSprites(pokemon.sprites))
}).catch(error => console.log(error)) */

const pokemonNumbers = [...Array(150).keys()]
const lazilyFetchPokemon = ids =>
  ids.reduce((previousPromises, nextId) =>
    previousPromises.then(() => fetchPokemon(nextId).then(res => console.log(res.name))),
    Promise.resolve())

lazilyFetchPokemon(pokemonNumbers.slice(1))