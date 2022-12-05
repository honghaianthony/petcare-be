const express = require('express');
const router = express.Router();
const passport = require('passport');

const categoryController = require('./category.controller');

router.get('/get-all-categories', categoryController.getAllCategories);
router.get('/get-category-by-id', categoryController.getCategoryById);
router.post('/create-category', categoryController.createCategory);
router.delete(
  '/delete-category',
  passport.authenticate('jwt', { session: false }),
  categoryController.deleteCategory
);

module.exports = router;
