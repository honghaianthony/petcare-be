const models = require('../../models');

module.exports = {
  getAllCategories: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const categories = await models.Category.find();
        resolve(categories);
      } catch (error) {
        reject(error);
      }
    });
  },
  getCategoryById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const category = await models.Category.findById(req.query.id);
        resolve(category);
      } catch (error) {
        reject(error);
      }
    });
  },
  createCategory: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const category = await models.Category.create(req.body);
        resolve(category, {
          errCode: 0,
          errMessage: 'Create category Successfully',
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteCategory: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const category = await models.Category.findOneAndDelete(req.query.id);
        resolve(category, {
          errCode: 0,
          errMessage: 'Deleted category Successfully',
        });
      } catch (error) {
        reject(error);
      }
    });
  },
};
