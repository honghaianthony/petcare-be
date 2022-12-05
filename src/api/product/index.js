const express = require('express');
const router = express.Router();
const passport = require('passport');

const productController = require('./product.controller');

router.get('/get-all-products', productController.getAllProducts);
router.get('/get-product-by-id', productController.getProductById);
router.post(
  '/create-product',
  passport.authenticate('jwt', { session: false }),
  productController.createProduct
);
router.put(
  '/update-product',
  passport.authenticate('jwt', { session: false }),
  productController.updateProduct
);
router.delete(
  '/delete-product',
  passport.authenticate('jwt', { session: false }),
  productController.deleteProduct
);

module.exports = router;
