const express = require('express');
const router = express.Router();
const passport = require('passport');

const blogController = require('./blog.controller');

router.get('/get-all-blogs', blogController.getAllBlogs);
router.get('/get-blog-by-id', blogController.getBlogById);
router.post(
  '/create-blog',
  passport.authenticate('jwt', { session: false }),
  blogController.createBlog
);
router.put(
  '/update-blog',
  passport.authenticate('jwt', { session: false }),
  blogController.updateBlog
);
router.delete(
  '/delete-blog',
  passport.authenticate('jwt', { session: false }),
  blogController.deleteBlog
);

module.exports = router;
