const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },
    blogImage: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('blogs', Blog);
