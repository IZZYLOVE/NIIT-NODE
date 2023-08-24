const lodash = require("lodash");
const productsList = require("./products.json").products;

const getProducts = () => {
  return JSON.stringify(productsList); // Convert the array to a JSON string
}

const getProductsById = (productId, done) => {
  const product = productsList.find(product => product.id === productId);
  if (!product) {
    return done("Requested product doesn't exist..!", null);
  }
  return done(null, JSON.stringify(product));
}

const saveProduct = (newProduct, done) => {
  const existingProduct = productsList.find(product => product.id === newProduct.id);
  if (existingProduct) {
    return done("Product already exists..!", null);
  }
  productsList.push(newProduct);
  return done(null, JSON.stringify(productsList));
}

const updateProduct = (productId, updateData, done) => {
  const productIndex = productsList.findIndex(product => product.id === productId);
  if (productIndex === -1) {
    return done("Requested product doesn't exist..!", null);
  }
  productsList[productIndex] = { ...productsList[productIndex], ...updateData };
  return done(null, JSON.stringify(productsList));
}

const deleteProduct = (productId, done) => {
  const updatedProductsList = productsList.filter(product => product.id !== productId);
  if (updatedProductsList.length === productsList.length) {
    return done("Requested product doesn't exist..!", null);
  }
  return done(null, JSON.stringify(updatedProductsList));
}

module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}
