const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    icon: { type: String, required: true },
    label: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('categories', Category);
