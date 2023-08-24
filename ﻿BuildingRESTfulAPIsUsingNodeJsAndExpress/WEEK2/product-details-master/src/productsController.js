// src\productsController.js

const productService = require("./productsService");

const getProducts = function (done) {
  productService.getProducts(done);
};

const getProductById = function (productId, done) {
  productService.getProductById(productId, done);
};

const saveProductDetails = function (productDetails, done) {
  productService.saveProductDetails(productDetails, done);
};

const deleteProductById = function (productId, done) {
  productService.deleteProductById(productId, done);
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById,
};
