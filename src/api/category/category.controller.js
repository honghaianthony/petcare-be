const categoryService = require('./category.service');

module.exports = {
  getAllCategories: async function (req, res) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getCategoryById: async function (req, res) {
    try {
      const category = await categoryService.getCategoryById(req);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createCategory: async function (req, res) {
    try {
      const category = await categoryService.createCategory(req);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteCategory: async function (req, res) {
    try {
      const category = await categoryService.deleteCategory(req);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
