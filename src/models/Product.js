const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String },
    sale: { type: Number },
    rate: { type: Number },
    numOfProductsSold: { type: String },
    numOfProductsInStock: { type: String },
    img: { type: String },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('products', Product);
