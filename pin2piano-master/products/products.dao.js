// const { v4: uuidv4 } = require("uuid");

// /* 
//   saveProduct should be a function that calls the save() function on Products Model 
//   to persist products data in MongoDB Products collection of shoppingcartDB
// */
// const saveProduct = null;

// /* 
//   getProductById should be a function that calls the findOne() function on Products Model 
//   to fetch the Product document by provided Id from the Products collection of shoppingcartDB
// */
// const getProductById = null;

// /* 
//   findProductsByQuery should be a function that calls the find() function on Products Model 
//   with query specifying criteria on category and productName fields
//   The function should fetch all documents that matches the criteria from Products 
//   collection of shoppingcartDB
// */
// const findProductsByQuery = null;

// /* 
//   updateProductDetails should be a function that calls the findOneAndUpdate() 
//   function on Products Model that fetches product by id from Products collection of shoppingcartDB and updates it
// */
// const updateProductDetails = null;


// module.exports = {
//   saveProduct,
//   getProductById,
//   findProductsByQuery,
//   updateProductDetails
// }

const ProductsModel = require('./products.entity');

const saveProduct = async (productData) => {
  const product = new ProductsModel(productData);
  return product.save();
};

const getProductById = (productId) => {
  return ProductsModel.findOne({ productId }).exec();
};

const findProductsByQuery = (query) => {
  return ProductsModel.find(query).exec();
};

const updateProductDetails = (productId, updatedData) => {
  return ProductsModel.findOneAndUpdate({ productId }, updatedData, { new: true }).exec();
};

module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
};
