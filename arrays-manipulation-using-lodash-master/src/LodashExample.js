
//import the lodash module
const _ = require('lodash')


//Create a function to find a maximum value from number array.
const findMaxValue = (numbersArray) => {
    const maxValue = _.max(numbersArray);
    return maxValue;
  }
  

//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
const filterValues = (numbersArray, threshold) => {
  const filteredNumbers = _.filter(numbersArray, number => number > threshold);
  return filteredNumbers;
}


//Create a function to return all values of employeeName array in capital letters.
const nameInCapital = (employeeNames) => {
    const capitalizedNames = _.map(employeeNames, name => name.toUpperCase());
    return capitalizedNames;
  }



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital
}
