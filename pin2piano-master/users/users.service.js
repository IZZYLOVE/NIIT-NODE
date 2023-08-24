// const usersDao = require("./users.dao");

// const saveUser = function (userReq, done) {
//   usersDao.saveUser(userReq, (err, results) => {
//     if (err) {
//       // EXITING
//       return done({ "STATUS": "DATA_ERROR", "error": "Encountered data error in saving user..!" });
//     }

//     // EXITING with results
//     return done(null, results);
//   });
// }

// const findUsers = function (done) {
//   usersDao.findUsers((err, results) => {
//     if (err) {
//       // EXITING
//       return done({ "STATUS": "DATA_ERROR", "error": "Encountered data error in fetching users..!" });
//     }

//     // EXITING with results
//     return done(null, results);
//   });
// }

// const getUserByEmail = function (email, done) {
//   usersDao.getUserByEmail(email, (err, results) => {
//     if (err) {
//       // EXITING
//       return done({ "STATUS": "DATA_ERROR", "error": "Encountered data error in getting user details..!" });
//     }

//     // EXITING with results
//     return done(null, results);
//   });
// }

// const getUserById = function (userId, done) {
//   usersDao.getUserById(userId, (err, results) => {
//     if (err) {
//       // EXITING
//       return done({ "STATUS": "DATA_ERROR", "error": "Encountered data error in getting user details..!" });
//     }

//     // EXITING with results
//     return done(null, results);
//   });
// }

// const updateUserDetails = function (userId, updateReq, done) {
//   usersDao.updateUserDetails(userId, updateReq, (err, results) => {
//     if (err) {
//       // EXITING
//       return done({ "STATUS": "DATA_ERROR", "error": "Encountered data error in updating user details..!" });
//     }

//     // EXITING with results
//     return done(null, results);
//   });
// }

// module.exports = {
//   saveUser,
//   findUsers,
//   getUserByEmail,
//   updateUserDetails,
//   getUserById
// }


const usersDao = require("./users.dao");

const saveUser = async (userReq) => {
  try {
    const savedUser = await usersDao.saveUser(userReq);
    return savedUser;
  } catch (err) {
    throw err;
  }
};

const findUsers = async () => {
  try {
    const users = await usersDao.findUsers();
    return users;
  } catch (err) {
    throw err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await usersDao.getUserByEmail(email);
    return user;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await usersDao.getUserById(userId);
    return user;
  } catch (err) {
    throw err;
  }
};

const updateUserDetails = async (userId, updateReq) => {
  try {
    const updatedUser = await usersDao.updateUserDetails(userId, updateReq);
    return updatedUser;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById,
};
