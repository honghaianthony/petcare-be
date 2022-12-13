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
const userRouter = require('./user');
const orderRouter = require('./order');

router.use(authRouter);
router.use(loginWithGoogleRouter);
router.use('/service', serviceRouter);
router.use('/blog', blogRouter);
router.use('/product', productRouter);
router.use('/product-detail', productDetailRouter);
router.use('/category', categoryRouter);
router.use('/status', statusRouter);
router.use('/user', userRouter);
router.use('/order', orderRouter);

module.exports = router;
