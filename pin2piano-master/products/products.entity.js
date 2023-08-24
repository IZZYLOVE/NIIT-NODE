// const mongoose = require('mongoose');

// const schema = null;

// /*
// Define Schema for Products with following fields with type and validation criteria as specified in the format:
// [Field :: Type :: Validation Criteria]

// ProductId :: String :: Mandatory and Unique, 
// ProductName :: String :: Mandatory, 
// Description :: String :: Mandatory with Default Value 0, 
// Price :: Number :: Mandatory with Default Value 0, 
// UnitsAvailable :: Number :: Mandatory with Default Value 0,
// Tags :: Array :: Mandatory, 
// Category :: String :: Mandatory, 
// Metadata :: Object 
// UpdatedOn :: Date :: Mandatory with Default Value Current Date, 
// UpdatedBy :: String :: Mandatory
// */


// module.exports = mongoose.model('products', schema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, default: 0 },
  unitsAvailable: { type: Number, default: 0 },
  description: { type: String, default: "" },
  tags: { type: [String], default: [] },
  updatedOn: { type: Date, default: Date.now },
  updatedBy: { type: String, required: true }
});

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
