const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const loginWithGoogleRouter = require('./auth/loginWithGoogle');
const serviceRouter = require('./service');
const blogRouter = require('./blog');

router.use(authRouter);
router.use(loginWithGoogleRouter);
router.use('/service', serviceRouter);
router.use('/blog', blogRouter);

module.exports = router;
