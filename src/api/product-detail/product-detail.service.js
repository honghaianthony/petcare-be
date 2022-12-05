const models = require('../../models');

module.exports = {
  getAllProductDetails: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const products = await models.ProductDetail.find().populate(
          'product',
          'category'
        );
        resolve(products);
      } catch (err) {
        reject(err);
      }
    });
  },
  getProductDetailById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.ProductDetail.findById(
          req.query.id
        ).populate('product', 'category');
        resolve(product);
      } catch (err) {
        reject(err);
      }
    });
  },
  createProductDetail: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.Product.findOne({
          _id: data.productId,
        });
        const category = await models.Category.findOne({
          _id: data.categoryId,
        });
        const productDetail = await models.ProductDetail.create({
          category: category,
          product: product,
          description: data.description,
          numOfRate: data.numOfRate,
          numOfProductsReview: data.numOfProductsReview,
          numOfProductsLove: data.numOfProductsLove,
          numOfProductsInStock: data.numOfProductsInStock,
        });
        resolve({
          errCode: 0,
          errMessage: 'Created Product Successfully',
          productDetail,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  updateProductDetail: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.ProductDetail.findOneAndUpdate(
          {
            _id: req.query.id,
          },
          {
            description: data.description,
            numOfRate: data.numOfRate,
            numOfProductsReview: data.numOfProductsReview,
            numOfProductsLove: data.numOfProductsLove,
            numOfProductsInStock: data.numOfProductsInStock,
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
  deleteProductDetail: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const product = await models.ProductDetail.findOneAndDelete({
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
