const addition = (num1, num2) => {
  // Write the code here
  return (num1 + num2)
};

const subtraction = (num1, num2) => {
    // Write the code here
    return (num1 - num2)
};

const division = (num1, num2) => {
  // Write the code here
  if(num1 === 0 && num2 === 0){num2 = 1}
  return (num1 / num2)
};

const multiplication = (num1, num2) => {
    // Write the code here
    return (num1 * num2)
};


module.exports = { multiplication, division, subtraction, addition};
