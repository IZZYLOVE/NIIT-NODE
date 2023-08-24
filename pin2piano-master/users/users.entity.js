// const mongoose = require('mongoose');

// /*
// Define Schema for Users with following fields with type and validation criteria as specified in the format:
// [Field :: Type :: Validation Criteria]

// UserId :: String :: Mandatory and Unique, 
// UserName :: String :: Mandatory, 
// Email :: String :: Mandatory, 
// OrdersPlaced :: Number :: Mandatory with Default Value 0, 
// Tags :: Array :: Mandatory, 
// Description :: String :: Mandatory with Default Value Empty String, 
// UpdatedOn :: Date :: Mandatory with Default Value Current Date, 
// UpdatedBy :: String :: Mandatory
// */

// const schema = null;

// module.exports = mongoose.model('users', schema);


const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  ordersPlaced: { type: Number, default: 0 },
  tags: { type: Array, required: true },
  description: { type: String, default: "" },
  updatedOn: { type: Date, default: Date.now },
  updatedBy: { type: String, required: true },
});

module.exports = mongoose.model('users', schema);
