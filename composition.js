const compose = (functionA, functionB, functionC) => valueInCommon =>
  functionA(functionB(functionC(valueInCommon)))

/*
    ComposeByReucingRIght receive an array os functions
    that have a value in common as an argument.
    This value in common is passed through the compose function by curriying.
    The array of functions is interated from right to left, and each one of them
    is applied to the cumulative value of the argument in common amongst them.
*/
const composeByReducingRight = (
  ...functionsToBeComposedArray
) => valueInCommon =>
  functionsToBeComposedArray.reduceRight(
    (finalState, currentFunction) => currentFunction(finalState),
    valueInCommon
  )

const trace = label => value => {
  console.log(`${label}: ${value}`)
  return value
}

const split = string => string.split("")
const toUpper = string => string.toUpperCase()

const toUpperSplit = composeByReducingRight(
  trace("before split"),
  split,
  trace("after split"),
  toUpper,
  trace("after upper")
)

toUpperSplit('Machen sie diese Zeilen im Bedarfsfall frei.')