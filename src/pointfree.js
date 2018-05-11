'use strict'

const { compose, pipe } = require('ramda')

// Predefined, already-curried functions you can use. See `./functions.js`.

const {
    id, // id(3) === 3
    add, // add(1, 2) === 3
    multiply, // multiply(1, 2) === 2
    divide, // divide(1, 2) === 0.5
    divideBy, // divideBy(2, 1) === 0.5
    toLower, // toLower('YO') === 'yo'
    append, // append('-free', 'point') === 'point-free'
    splitOn, // splitOn('-', 'point-free') === ['point', 'free']
    map, // map(toLower, ['HEY', 'YO']) -> ['hey', 'yo']
    filter, // filter(isEven, [2, 5, 8, 10, 1]) -> [2, 8, 10]
    reduce, // reduce(add, ['point-', 'free']) === 'point-free'
    reverse, // reverse('hello') === 'olleh'
    take, // take(5, 'hello world') === 'hello'
    equals, // equals(1, 1) === true
} = require('./functions')

/**
 * Functions you must derive. Note that for this exercise, you may only create
 * functions by partially applying existing functions and / or composing
 * existing functions together. For composition, you may use Ramda's `compose`
 * or `pipe`, already imported for you in this module. Again, do NOT define
 * new functions from scratch (using `function` or `=>` or "cheats" like
 * `eval`) – you may only "remix" starting functions and ones you derive.
 */

// inc :: Number -> Number
const inc = undefined

// negate :: Number -> Number
const negate = undefined

// negateThenInc :: Number -> Number
const negateThenInc = undefined
// const negateThenInc = pipe(negate, inc)

// doubleAndDec :: Number -> Number
const doubleThenDec = undefined

// ask :: String -> String
const ask = undefined

// incAll :: [Number] -> [Number]
const incAll = undefined

// incThenNegateAll :: [Number] -> [Number]
const incThenNegateAll = undefined
// const incThenNegateAll = pipe(map(inc), map(negate))
// const incThenNegateAll = pipe(pipe, map)(inc, negate)

// sum :: [Number] -> Number
const sum = undefined

// product :: [Number] -> Number
const product = undefined

// isSpace :: String -> Boolean
const isSpace = undefined

// still working on this…

module.exports = {
    inc,
    negate,
    negateThenInc,
    doubleThenDec,
    ask,
    incAll,
    incThenNegateAll,
    sum,
    product,
    isSpace,
}
