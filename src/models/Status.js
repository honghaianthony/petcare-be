const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusSchema = new Schema(
  {
    statusName: { type: String },
    statusId: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('status', StatusSchema);
