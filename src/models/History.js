const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const History = new Schema(
  {
    price: { type: String },
    status: {
      type: Schema.Types.ObjectId,
      ref: 'status',
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'carts',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('histories', History);
