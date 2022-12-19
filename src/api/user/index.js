const express = require('express');
const passport = require('passport');
const router = express.Router();
const { checkUserAdmin } = require('../../auth/checkPermission');

const userController = require('./user.controller');

router.get(
  '/get-info',
  passport.authenticate('jwt', { session: false }),
  userController.getInfo
);
router.get(
  '/get-all-users',
  passport.authenticate('jwt', { session: false }),
  checkUserAdmin,
  userController.getAllUsers
);
router.get(
  '/get-user-by-id',
  passport.authenticate('jwt', { session: false }),
  checkUserAdmin,
  userController.getUserById
);

router.put(
  '/update-users-role',
  passport.authenticate('jwt', { session: false }),
  checkUserAdmin,
  userController.updateRole
);

router.put(
  '/update-user',
  passport.authenticate('jwt', { session: false }),
  checkUserAdmin,
  userController.updateUserInfo
);

router.delete(
  '/delete-user',
  passport.authenticate('jwt', { session: false }),
  checkUserAdmin,
  userController.deleteUser
);

router.get(
  '/get-all-carts',
  passport.authenticate('jwt', { session: false }),
  userController.getCartForUser
);
router.post(
  '/add-cart',
  passport.authenticate('jwt', { session: false }),
  userController.addCartItem
);
router.delete(
  '/delete-cart',
  passport.authenticate('jwt', { session: false }),
  userController.deleteCartItem
);

module.exports = router;
