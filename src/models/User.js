const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    role: { type: Number, require: true },
    userName: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    address: { type: String, require: true },
    avatar: { type: String },
    googleId: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', UserSchema);
