const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    fullName: { type: String, required: true },
    petType: { type: String, required: true },
    serviceType: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('services', ServiceSchema);
