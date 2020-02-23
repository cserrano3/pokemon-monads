const compose = (functionA, functionB, functionC) => valueInCommon =>
  functionA(functionB(functionC(valueInCommon)));

/*
    ComposeByReucingRIght receive an array os functions
    that have a value in common as an argument.
    This value in common is passed through the compose function by curriying.
    The array of functions is interated from right to left, and each one of them
    is applied to the cumulative value of the argument in common amongst them.
*/

/*
  The functions are executed from right to left.
*/
const composeByReducingRight = (
  ...functionsToBeComposedArray
) => valueInCommon =>
  functionsToBeComposedArray.reduceRight(
    (finalState, currentFunction) => currentFunction(finalState),
    valueInCommon,
  );

/* Pipe will do the same as compose, but it will start the function executions
from left to right */
const pipe = (...functions) => paramInCommon =>
  functions.reduce(
    (finalValue, currentFunction) => currentFunction(finalValue),
    paramInCommon,
  );

function pipeES5(...functions) {
  return function(paramInCommon) {
    return functions.reduce(function(finalValue, currentFunction) {
      return currentFunction(finalValue);
    }, paramInCommon);
  }
}

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

const split = string => string.split('');
const toUpper = string => string.toUpperCase();
const mapThis = fn => mappable => mappable.map(fn)

const toUpperSplit = composeByReducingRight(
  trace('after split'),
  split,
  trace('after upeer'),
  toUpper,
  trace('before upper'),
);


toUpperSplit('Machen sie diese Zeilen im Bedarfsfall frei.');

const splitted = split('Machen sie diese Zeilen im Bedarfsfall frei.');
const mappedSplit = mapThis(toUpper)(splitted)
console.log(mappedSplit)