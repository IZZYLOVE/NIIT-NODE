// const mongoose = require('mongoose');

// /*
// Define Schema for Orders with following fields with type and validation criteria as specified in the format:
// [Field :: Type :: Validation Criteria]

// OrderId :: String :: Mandatory and Unique, 
// OrderName :: String :: Mandatory with Default Value Empty String, 
// ProductId :: String :: Mandatory, 
// ProductName :: String :: Mandatory, 
// UserId :: String :: Mandatory, 
// UserName :: String :: Mandatory, 
// UnitsPlaced :: Number :: Mandatory with Default Value 0,
// UpdatedOn :: Date :: Mandatory with Default Value Current Date, 
// UpdatedBy :: String :: Mandatory
// */

// const schema = null;

// module.exports = mongoose.model('orders', schema);

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    orderName: {
      type: String,
      default: "",
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    unitsPlaced: {
      type: Number,
      default: 0,
      required: true,
    },
    updatedOn: {
      type: Date,
      default: Date.now,
      required: true,
    },
    updatedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // This will automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model("orders", schema);

