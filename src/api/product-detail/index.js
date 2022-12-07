const express = require('express');
const router = express.Router();
const passport = require('passport');

const productDetailController = require('./product-detail.controller');

router.get(
  '/get-all-product-details',
  productDetailController.getAllProductDetails
);
router.get(
  '/get-product-detail-by-id',
  productDetailController.getProductDetailById
);
router.post(
  '/create-product-detail',
  passport.authenticate('jwt', { session: false }),
  productDetailController.createProductDetail
);
router.put(
  '/update-product-detail',
  passport.authenticate('jwt', { session: false }),
  productDetailController.updateProductDetail
);
router.delete(
  '/delete-product-detail',
  passport.authenticate('jwt', { session: false }),
  productDetailController.deleteProductDetail
);

module.exports = router;
