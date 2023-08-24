// src\productDao.js

const fs = require("fs");
const path = require("path");

const productFilePath = path.join(__dirname, "products.json");

const getProducts = function (done) {
  fs.readFile(productFilePath, "utf8", (err, data) => {
    if (err) {
      done(err);
      return;
    }
    try {
      const productData = JSON.parse(data);
      done(null, productData);
    } catch (parseError) {
      done(parseError);
    }
  });
};

const getProductById = function (id, done) {
  getProducts((err, productData) => {
    if (err) {
      done(err);
      return;
    }
    const product = productData.find((item) => item.id === id);
    done(null, product);
  });
};

const saveProductDetails = function (productDetails, done) {
  getProducts((err, productData) => {
    if (err) {
      done(err);
      return;
    }
    const newProduct = {
      id: productData.length + 1,
      ...productDetails,
    };
    productData.push(newProduct);
    fs.writeFile(productFilePath, JSON.stringify(productData), (writeErr) => {
      if (writeErr) {
        done(writeErr);
        return;
      }
      done(null, newProduct);
    });
  });
};

const deleteProductById = function (productId, done) {
  getProducts((err, productData) => {
    if (err) {
      done(err);
      return;
    }
    const updatedProductData = productData.filter((item) => item.id !== productId);
    fs.writeFile(productFilePath, JSON.stringify(updatedProductData), (writeErr) => {
      if (writeErr) {
        done(writeErr);
        return;
      }
      done(null);
    });
  });
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById,
};
