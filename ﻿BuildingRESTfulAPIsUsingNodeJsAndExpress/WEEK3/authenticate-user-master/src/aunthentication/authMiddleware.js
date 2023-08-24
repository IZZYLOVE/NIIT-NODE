

// //import jsonwebtoken and config

// //This function verifyToken will verify the token coming from headers 
// const verifyToken = (req, res, next) => {
//   // Getting the authorization header
//   const token = req.headers["authorization"];

 
// //Synchronously verify given token using a secret or a public key to get a decoded token 
 
//   //return next
//   return next();
// };

// module.exports = verifyToken;

const jwt = require('jsonwebtoken');
// const config = require('../config');
const config = require('../../config');


const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const decoded = jwt.verify(token, config.AUTH_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
