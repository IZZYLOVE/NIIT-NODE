// const { v4: uuidv4 } = require("uuid");

// /* 
//   saveUser should be a function that calls the save() function on Users Model 
//   to persist user data in MongoDB Users collection of shoppingcartDB
// */
// const saveUser = null;

// /* 
//   findUsers should be a function that calls the find() function on Users Model 
//   to fetch all documents from Users collection of shoppingcartDB
// */
// const findUsers = null;

// /* 
//   getUserByEmail should be a function that calls the findOne() function on Users Model 
//   to fetch User document from Users collection of shoppingcartDB,
//   containing data of Users for given email
// */
// const getUserByEmail = null;

// /* 
//   getUserById should be a function that calls the findOne() function on Users Model 
//   to fetch User document from Users collection of shoppingcartDB,
//   containing data of Users for given userId
// */
// const getUserById = null;

// /* 
//   updateUserDetails should be a function that calls the findOneAndUpdate() 
//   function on Users Model that fetches user by id from Products collection of shoppingcartDB and updates it
// */
// const updateUserDetails = null;

// module.exports = {
//   saveUser,
//   findUsers,
//   getUserByEmail,
//   updateUserDetails,
//   getUserById
// }

const { v4: uuidv4 } = require("uuid");
const UsersModel = require('./users.entity');

const saveUser = (userData) => {
  userData.userId = uuidv4();
  const user = new UsersModel(userData);
  return user.save();
};

const findUsers = () => {
  return UsersModel.find().exec();
};

const getUserByEmail = (email) => {
  return UsersModel.findOne({ email }).exec();
};

const getUserById = (userId) => {
  return UsersModel.findOne({ userId }).exec();
};

const updateUserDetails = (userId, updatedData) => {
  return UsersModel.findOneAndUpdate({ userId }, updatedData, { new: true }).exec();
};

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById
};




