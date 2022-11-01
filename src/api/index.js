const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const loginWithGoogleRouter = require('./auth/loginWithGoogle');
const serviceRouter = require('./service');

router.use(authRouter);
router.use(loginWithGoogleRouter);
router.use('/service', serviceRouter);

module.exports = router;
