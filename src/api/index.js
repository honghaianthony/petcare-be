const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const loginWithGoogleRouter = require('./auth/loginWithGoogle');
const blogRouter = require('./blog');

router.use(authRouter);
router.use(loginWithGoogleRouter);
router.use('/blog', blogRouter);

module.exports = router;
