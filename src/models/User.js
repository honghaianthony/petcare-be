const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    role: { type: Number, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    avatar: { type: String },
    googleId: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', UserSchema);
