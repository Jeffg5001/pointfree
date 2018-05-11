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
const inc = add(1)

// negate :: Number -> Number
const negate = multiply(-1)

// negateThenInc :: Number -> Number
const negateThenInc = compose(inc, negate)
// const negateThenInc = pipe(negate, inc)

// doubleAndDec :: Number -> Number
const doubleThenDec = pipe(multiply(2), add(-1))

// ask :: String -> String
const ask = append('?')

// incAll :: [Number] -> [Number]
const incAll = map(inc)

// incThenNegateAll :: [Number] -> [Number]
const incThenNegateAll = map(pipe(inc, negate))
// const incThenNegateAll = pipe(map(inc), map(negate))
// const incThenNegateAll = pipe(pipe, map)(inc, negate)

// sum :: [Number] -> Number
const sum = reduce(add, 0)

// product :: [Number] -> Number
const product = reduce(multiply, 1)

// isSpace :: String -> Boolean
const isSpace = equals(' ')

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
