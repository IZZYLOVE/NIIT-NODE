

// //import users.json file and fs module

// //This method will findUser
// function findUser(email,done){
//     //use filter method to find the user from json file
   
// }

// //This method will register user
// function registerUser(userData,done){
   
//     //call fileWrite method and write the user in json file
  
// }

// module.exports = {
//     findUser,registerUser
// }

const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, 'users.json');

function findUser(email, done) {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) return done(err);

    const users = JSON.parse(data);
    const user = users.find((user) => user.email === email);
    done(null, user);
  });
}

function registerUser(userData, done) {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) return done(err);

    const users = JSON.parse(data);
    users.push(userData);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) return done(err);
      done(null);
    });
  });
}

module.exports = {
  findUser,
  registerUser,
};
