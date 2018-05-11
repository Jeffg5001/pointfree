'use strict'
/* eslint-disable no-unused-expressions */

const { expect } = require('chai')
const {
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
} = require('./pointfree')

describe('Point-free', () => {
    describe('`inc`', () => {
        it('adds 1', () => {
            expect(inc(4)).to.equal(5)
            expect(inc(0)).to.equal(1)
            expect(inc(7)).to.equal(8)
        })
    })

    describe('`negate`', () => {
        it('negates a number', () => {
            expect(negate(4)).to.equal(-4)
            expect(negate(0)).to.equal(0)
            expect(negate(-7)).to.equal(7)
        })
    })

    describe('`negateThenInc`', () => {
        it('negates and increments a number', () => {
            expect(negateThenInc(4)).to.equal(-3)
            expect(negateThenInc(0)).to.equal(1)
            expect(negateThenInc(-7)).to.equal(8)
        })
    })

    describe('`doubleThenDec`', () => {
        it('doubles and **DEC**rements a number', () => {
            expect(doubleThenDec(4)).to.equal(7)
            expect(doubleThenDec(0)).to.equal(-1)
            expect(doubleThenDec(-7)).to.equal(-15)
        })
    })

    describe('`ask`', () => {
        it('tacks on a question mark', () => {
            expect(ask('who')).to.equal('who?')
            expect(ask('where')).to.equal('where?')
        })
    })

    describe('`incAll`', () => {
        it('creates a new array of incremented values', () => {
            expect(incAll([1, 5, 0])).to.deep.equal([2, 6, 1])
            expect(incAll([-3, 9])).to.deep.equal([-2, 10])
        })
    })

    describe('`incThenNegateAll`', () => {
        it('tacks on a question mark', () => {
            expect(incThenNegateAll([1, 5, 0])).to.deep.equal([-2, -6, -1])
            expect(incThenNegateAll([-3, 9])).to.deep.equal([2, -10])
        })
    })

    describe('`sum`', () => {
        it('sums a list of numbers', () => {
            expect(sum([3, 3])).to.equal(6)
            expect(sum([1, 2, 3, 4])).to.deep.equal(10)
        })
    })

    describe('`product`', () => {
        it('gets the product of a list of numbers', () => {
            expect(product([3, 3])).to.equal(9)
            expect(product([1, 2, 3, 4])).to.deep.equal(24)
        })
    })

    describe('`isSpace`', () => {
        it('confirms if the passed-in string is a single space', () => {
            expect(isSpace('')).to.be.false
            expect(isSpace(' ')).to.be.true // <- this one
            expect(isSpace('  ')).to.be.false
            expect(isSpace('Hmmm')).to.be.false
        })
    })
})
