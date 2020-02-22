const fetchPokemon = require("./api.js")
const R = require("ramda"),
  path = R.path,
  prop = R.prop,
  _ = R._

class Maybe {
  constructor(value) {
    this._value = value
  }

  static of(value) {
    return new Maybe(value)
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }

  map(callback) {
    if (this.isNothing()) {
      return Maybe.of(null)
    }

    return Maybe.of(callback(this._value))
  }
}

const pokemonNumbers = [...Array(150).keys()]

const lazilyFetchPokemon = ids =>
  ids.reduce(
    (previousPromises, nextId) =>
      previousPromises.then(() =>
        fetchPokemon(nextId).then(res => console.log(res.name))
      ),
    Promise.resolve()
  )

lazilyFetchPokemon(pokemonNumbers.slice(1))
