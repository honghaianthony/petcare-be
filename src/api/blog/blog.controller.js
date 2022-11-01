const blogService = require('./blog.service');

module.exports = {
  getAllBlogs: async function (req, res) {
    try {
      const blogs = await blogService.getAllBlogs();
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getBlogById: async function (req, res) {
    try {
      const blog = await blogService.getBlogById(req);
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createBlog: async function (req, res) {
    try {
      const blog = await blogService.createBlog(req);
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateBlog: async function (req, res) {
    try {
      const blog = await blogService.updateBlog(req);
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteBlog: async function (req, res) {
    try {
      const blog = await blogService.deleteBlog(req);
      return res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
  },
};
