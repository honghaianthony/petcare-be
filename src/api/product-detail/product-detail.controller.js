const productDetailService = require('./product-detail.service');

module.exports = {
  getAllProductDetails: async function (req, res) {
    try {
      const products = await productDetailService.getAllProductDetails();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getProductDetailById: async function (req, res) {
    try {
      const product = await productDetailService.getProductDetailById(req);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createProductDetail: async function (req, res) {
    try {
      const product = await productDetailService.createProductDetail(req);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateProductDetail: async function (req, res) {
    try {
      const product = await productDetailService.updateProductDetail(req);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteProductDetail: async function (req, res) {
    try {
      const product = await productDetailService.deleteProductDetail(req);
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
  },
};
