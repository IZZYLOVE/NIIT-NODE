const http = require('http');
const productsService = require("./productsService");
const getRequestData = require('./utils');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/products') {
    const products = productsService.getProducts();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  }
  // Get a product with specified id
  else if (req.method === 'GET' && req.url.startsWith('/products/')) {
    const productId = req.url.split('/')[2];
    productsService.getProductsById(productId, (err, product) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: err }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(product);
      }
    });
  }
  // Create a new product
  else if (req.method === 'POST' && req.url === '/products') {
    const body = await getRequestData(req);
    const newProduct = JSON.parse(body);
    productsService.saveProduct(newProduct, (err, updatedProducts) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: err }));
      } else {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedProducts));
      }
    });
  }
  // Update a specific product
  else if (req.method === 'PUT' && req.url.startsWith('/products/')) {
    const productId = req.url.split('/')[2];
    const body = await getRequestData(req);
    const updateData = JSON.parse(body);
    productsService.updateProduct(productId, updateData, (err, updatedProducts) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: err }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedProducts));
      }
    });
  }
  // Delete a specific Product
  else if (req.method === 'DELETE' && req.url.startsWith('/products/')) {
    const productId = req.url.split('/')[2];
    productsService.deleteProduct(productId, (err, updatedProducts) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: err }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedProducts));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
