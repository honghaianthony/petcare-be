const productService = require('./product.service');

module.exports = {
  getAllProducts: async function (req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getProductById: async function (req, res) {
    try {
      const product = await productService.getProductById(req);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createProduct: async function (req, res) {
    try {
      const product = await productService.createProduct(req);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateProduct: async function (req, res) {
    try {
      const product = await productService.updateProduct(req);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteProduct: async function (req, res) {
    try {
      const product = await productService.deleteProduct(req);
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
  },
};
