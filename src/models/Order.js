const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'products',
  },
  name: { type: String },
  img: { type: String },
  amount: { type: Number },
  price: { type: Number },
});

const Order = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    productList: [Product],
    fullName: { type: String },
    address: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    sumPrice: { type: Number },
    status: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', Order);
