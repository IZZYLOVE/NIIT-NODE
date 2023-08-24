const assert = require('chai').assert;
const packageFile = require('../package.json');
const calculator = require('../calculator');
const glob = require('glob');
const fs = require('fs');

// variable declairation
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      it('Add two positive numbers, returning positive sum', function () {
        const result = calculator('A', { lhs: 5, rhs: 3 });
        assert.strictEqual(result, 8);
      });

      it('Add two negative numbers, returning negative sum', function () {
        const result = calculator('A', { lhs: -5, rhs: -3 });
        assert.strictEqual(result, -8);
      });

      it('Add two numbers, one negative, producing subtracted output', function () {
        const result = calculator('A', { lhs: 5, rhs: -3 });
        assert.strictEqual(result, 2);
      });

      it('Add zeros, produces zero', function () {
        const result = calculator('A', { lhs: 0, rhs: 0 });
        assert.strictEqual(result, 0);
      });
    });

    describe('Subtraction functionality testing', function () {
      it('Subtract two positive numbers, returning positive subtraction', function () {
        const result = calculator('S', { lhs: 8, rhs: 3 });
        assert.strictEqual(result, 5);
      });

      it('Subtract two negative numbers, returning negative subtraction', function () {
        const result = calculator('S', { lhs: -5, rhs: -3 });
        assert.strictEqual(result, -2);
      });

      it('Subtract two numbers, one negative, producing summed output', function () {
        const result = calculator('S', { lhs: 5, rhs: -3 });
        assert.strictEqual(result, 8);
      });

      it('Subtract zeros, produces zero', function () {
        const result = calculator('S', { lhs: 0, rhs: 0 });
        assert.strictEqual(result, 0);
      });
    });

    describe('Multiplication functionality testing', function () {
      it('Multiply two positive numbers, returning positive multiplication', function () {
        const result = calculator('M', { lhs: 5, rhs: 3 });
        assert.strictEqual(result, 15);
      });

      it('Multiply two negative numbers, returning positive multiplication', function () {
        const result = calculator('M', { lhs: -5, rhs: -3 });
        assert.strictEqual(result, 15);
      });

      it('Multiply two numbers, one negative, producing negative multiplication', function () {
        const result = calculator('M', { lhs: 5, rhs: -3 });
        assert.strictEqual(result, -15);
      });

      it('Multiply by zeros, produces zero', function () {
        const result = calculator('M', { lhs: 5, rhs: 0 });
        assert.strictEqual(result, 0);
      });
    });

    describe('Division functionality testing', function () {
      it('Divide two positive numbers, returning positive division', function () {
        const result = calculator('D', { lhs: 10, rhs: 2 });
        assert.strictEqual(result, 5);
      });

      it('Divide two negative numbers, returning positive division', function () {
        const result = calculator('D', { lhs: -10, rhs: -2 });
        assert.strictEqual(result, 5);
      });

      it('Divide two numbers, one negative, producing negative division', function () {
        const result = calculator('D', { lhs: 10, rhs: -2 });
        assert.strictEqual(result, -5);
      });

      it('Should not divide by 0, producing "Can not divide by zero" message', function () {
        const result = calculator('D', { lhs: 10, rhs: 0 });
        assert.strictEqual(result, 'Can not divide by zero');
      });
    });

    describe('Unknown operation testing', function () {
      it('Should not calculate if unknown operation is passed, producing "Unknown operation" message', function () {
        const result = calculator('X', { lhs: 10, rhs: 5 });
        assert.strictEqual(result, 'Unknown operation');
      });
    });
  });
});