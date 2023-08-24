// src\productsService.js

const productDao = require("./productDao");

const getProducts = function (done) {
  productDao.getProducts(done);
};

const getProductById = function (id, done) {
  productDao.getProductById(id, done);
};

const saveProductDetails = function (productDetails, done) {
  productDao.saveProductDetails(productDetails, done);
};

const deleteProductById = function (productId, done) {
  productDao.deleteProductById(productId, done);
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById,
};
