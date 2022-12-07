const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const loginWithGoogleRouter = require('./auth/loginWithGoogle');
const serviceRouter = require('./service');
const blogRouter = require('./blog');
const productRouter = require('./product');
const productDetailRouter = require('./product-detail');
const categoryRouter = require('./category');
const statusRouter = require('./status');

router.use(authRouter);
router.use(loginWithGoogleRouter);
router.use('/service', serviceRouter);
router.use('/blog', blogRouter);
router.use('/product', productRouter);
router.use('/product-detail', productDetailRouter);
router.use('/category', categoryRouter);
router.use('/status', statusRouter);

module.exports = router;
