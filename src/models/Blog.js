const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
    coverImage: { type: String },
    blogImage: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'users', require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('blogs', Blog);
