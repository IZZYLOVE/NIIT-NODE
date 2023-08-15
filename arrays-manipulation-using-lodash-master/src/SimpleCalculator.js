

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
const addNumbers = (a,b) => {
return(Number(a) + Number(b))
}



//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result

const subNumbers = (a,b) => {
  return(Number(a) - Number(b))
  }

//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
const mulNumbers = (a,b) => {
  return(Number(a) * Number(b))
  }

//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
const divNumbers = (a,b) => {
  if(Number(b) === 0){
    return("Please provide valid numbers..!")
  }
  return(Number(a) / Number(b))
  }

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}