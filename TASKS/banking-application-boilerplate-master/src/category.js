var category = function category(key) {
  
  // Write the Logic here
  const Obj = { ["PL"]: "Personal Loan", ["VL"]: "Vehicle Loan", ["EL"]: "Education Loan", ["HL"]: "Home Loan" };    
  return (Obj[key.toUpperCase()])
  
  };
  
  module.exports = {
    category: category
  };
