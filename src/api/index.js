const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const loginWithGoogleRouter = require('./auth/loginWithGoogle');

router.use(authRouter);
router.use(loginWithGoogleRouter);

module.exports = router;
