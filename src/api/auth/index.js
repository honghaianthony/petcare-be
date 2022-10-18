const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get(
  '/private',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'You are authorized' });
    console.log(req.user);
  }
);

module.exports = router;
