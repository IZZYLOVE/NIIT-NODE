

// //import dao layer
// function findUser(email,done){
//     //call the userdao finduser method
    
// }

// function registerUser(userData,done){
//     //call the userdao registeruser method
   
// }


// module.exports={
//     findUser, registerUser
// }

const userDAO = require('./userDAO');

function findUser(email, done) {
  userDAO.findUser(email, done);
}

function registerUser(userData, done) {
  userDAO.registerUser(userData, done);
}

module.exports = {
  findUser,
  registerUser,
};

