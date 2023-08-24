// src\productsRouter.js

const express = require("express");
const productsController = require("./productsController");

const router = express.Router();

router.get("/", (req, res) => {
  productsController.getProducts((err, results) => {
    if (err) {
      return res.status(400).json({ STATUS: "Error", message: err.message });
    }
    return res.status(200).json({ STATUS: "OK", data: results });
  });
});

router.get("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  productsController.getProductById(productId, (err, result) => {
    if (err) {
      return res.status(400).json({ STATUS: "Error", message: err.message });
    }
    return res.status(200).json({ STATUS: "OK", data: result });
  });
});

router.post("/", (req, res) => {
  const productDetails = req.body;
  productsController.saveProductDetails(productDetails, (err, result) => {
    if (err) {
      return res.status(400).json({ STATUS: "Error", message: err.message });
    }
    return res.status(201).json({ STATUS: "OK", data: result });
  });
});

router.delete("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  productsController.deleteProductById(productId, (err) => {
    if (err) {
      return res.status(400).json({ STATUS: "Error", message: err.message });
    }
    return res.status(200).json({ STATUS: "OK" });
  });
});

module.exports = router;
