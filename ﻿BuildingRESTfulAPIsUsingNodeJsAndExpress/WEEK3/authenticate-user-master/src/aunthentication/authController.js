

// //import the userService and authService module

// //This function will registerUser it will take two parameters
// //first the userData second the callback
// //call the userService finduser method and also the userService register method
// function registerUser(userData,done){
    
// }

// //This function will loginUser 
// //Use the method findUser of userService to first verify and if userfound than call
// //the createToken method
// function loginUser({ email, password }, done) {
  
//   }

// module.exports = {
//     registerUser,loginUser

// }

const userService = require('../Users/userService'); // Import the userService module
const authService = require('./authService'); // Import the authService module

function registerUser(userData, done) {
  // Call userService.registerUser to store user data in users.json
  userService.registerUser(userData, done);
}

function loginUser({ email, password }, done) {
  userService.findUser(email, (err, userData) => {
    if (err) return done(err);

    if (authService.verifyUser({ email, password }, userData)) {
      const token = authService.createJWT(userData);
      return done(null, token);
    } else {
      return done({ message: 'Invalid email or password' });
    }
  });
}

module.exports = {
  registerUser,
  loginUser,
};
