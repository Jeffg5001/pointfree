'use strict'

const { curry, flip } = require('ramda')

/**
 * Pre-defined functions you are allowed to use. These have all already been
 * curried for you, so you can partially apply them. Not all of these functions
 * might end up being needed, and you will have to derive new functions through
 * both partial application and composition in order to pass the specs. Many of
 * these functions exist in Ramda already, but we implement them here to make
 * it easy to see what they do without consulting the Ramda docs.
 */

// id :: * -> *
const id = a => a

// :: Number -> Number -> Number
const add = curry((a, b) => a + b)
const multiply = curry((a, b) => a * b)
const divide = curry((a, b) => a / b)
const divideBy = flip(divide) // divideBy(2, 1) === 0.5

// :: String -> String
const toLower = string => string.toLowerCase()

// :: String -> String -> String
const append = flip(add) // append('-free', 'point') === 'point-free'

// :: String -> String -> [String]
const splitOn = curry((separator, string) => string.split(separator))

// :: Function -> Array -> Array
const map = curry((mapper, arr) => arr.map(mapper))
const filter = curry((predicate, arr) => arr.filter(predicate))

// :: Function -> * -> Array -> Array
const reduce = curry((reducer, start, arr) => arr.reduce(reducer, start))

// :: (String | Array) -> (String | Array)
const reverse = curry(items => Array.prototype.reverse.apply(items))

// :: Number -> (String | Array) -> (String | Array)
const take = curry((number, items) => items.slice(0, number))

// :: * -> * -> Boolean
const equals = curry((a, b) => a === b)

module.exports = {
    id,
    add,
    multiply,
    divide,
    divideBy,
    toLower,
    append,
    splitOn,
    map,
    filter,
    reduce,
    reverse,
    take,
    equals,
}
