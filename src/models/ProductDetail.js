const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductDetail = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    description: { type: String },
    numOfRate: { type: Number },
    numOfProductsReview: { type: Number },
    numOfProductsLove: { type: Number },
    numOfProductsInStock: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('product-details', ProductDetail);
