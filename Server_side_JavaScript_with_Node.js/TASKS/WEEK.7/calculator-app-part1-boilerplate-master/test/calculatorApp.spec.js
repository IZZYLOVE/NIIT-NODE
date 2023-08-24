const chai = require('chai');
const expect = chai.expect;
// const { addition, subtraction } = require('../src/calculatorApp');
const { addition, subtraction, multiplication, division  } = require('../src/calculatorApp');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    // Write Test Case Here
    expect(addition(3, 4)).to.equal(7)
    expect(addition(1, 4)).to.equal(5)
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    expect(addition(-3, -4)).to.equal(-7)
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    expect(addition(3, -7)).to.equal(-4)
    expect(addition(-3, 7)).to.equal(4)
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(subtraction(4, 2)).to.equal(2)
    expect(subtraction(10, 2)).to.equal(8)

  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(subtraction(-4, 2)).to.equal(-6)
    expect(subtraction(-10, -2)).to.equal(-8)
  });
  it('Subtracting zero will produce zero subtraction.', () => {
    // Write Test Case Here
    expect(subtraction(4, 0)).to.equal(4)
    expect(subtraction(-10, -0)).to.equal(-10)
    expect(subtraction(0, -2)).to.equal(2)
  });
});


describe('Division Functionality', () => {
  it('Check if dividing two positive number and return positive result', () => {
    // Write Test Case Here
    expect(division(4, 2)).to.equal(2)
    expect(division(10, 2)).to.equal(5)

  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(division(-4, 2)).to.equal(-2)
    expect(division(10, -2)).to.equal(-5)
  });
  it('Dividing zero will produce zero or infinity', () => {
    // Write Test Case Here
    expect(division(4, 0)).to.equal(Infinity)
    expect(division(0, 0)).to.equal(0)
    expect(division(-0, -0)).to.equal(0)
    expect(division(0, -0)).to.equal(0)
    expect(division(-0, 0)).to.equal(0)
    expect(division(-10, 0)).to.equal(-Infinity)
    expect(division(-10, -0)).to.equal(Infinity)
    expect(division(0, -2)).to.equal(0)
  });
});


describe('Multiplication Functionality', () => {
  it('Check for multiplying two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(multiplication(4, 2)).to.equal(8)
    expect(multiplication(10, 2)).to.equal(20)

  });
  it('Check if either of number is negative produce positive result', () => {
    // Write Test Case Here
    expect(multiplication(-4, 2)).to.equal(-8)
    expect(multiplication(-10, -2)).to.equal(20)
  });
  it('Multiplication with zero will produce zero as multiplication.', () => {
    // Write Test Case Here
    expect(multiplication(4, 0)).to.equal(0)
    expect(multiplication(-10, -0)).to.equal(0)
    expect(multiplication(-0, -2)).to.equal(0)
    expect(multiplication(0, -2)).to.equal(0)
  });
});
