const models = require('../../models');

module.exports = {
  getAllProducts: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const products = await models.Product.find().populate('category', [
          '_id',
          'icon',
          'label',
        ]);
        resolve(products);
      } catch (err) {
        reject(err);
      }
    });
  },
  getProductById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.Product.findById(req.query.id).populate(
          'category',
          ['_id', 'icon', 'label']
        );
        resolve(product);
      } catch (err) {
        reject(err);
      }
    });
  },
  createProduct: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const category = await models.Category.findOne({
          _id: data.categoryId,
        });
        const product = await models.Product.create({
          name: data.name,
          price: data.price,
          sale: data.sale,
          rate: data.rate,
          numOfProductsSold: data.numOfProductsSold,
          productStock: data.productStock,
          img: data.img,
          category: category,
        });
        resolve({
          errCode: 0,
          errMessage: 'Created Product Successfully',
          product,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  updateProduct: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.Product.findOneAndUpdate(
          {
            _id: req.query.id,
          },
          {
            name: data.name,
            price: data.price,
            sale: data.sale,
            rate: data.rate,
            numOfProductsSold: data.numOfProductsSold,
            productStock: data.productStock,
          }
        );
        resolve({
          errCode: 0,
          errMessage: 'Updated Product Successfully',
          product,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  deleteProduct: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.Product.findOneAndDelete({
          _id: req.query.id,
        });
        resolve({
          errCode: 0,
          errMessage: 'Deleted Product Successfully',
          product,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
