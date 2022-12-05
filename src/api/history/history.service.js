const models = require('../../models');

module.exports = {
  getAllHistories: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const histories = await models.History.find().populate(
          'status',
          'item'
        );
        resolve(histories);
      } catch (err) {
        reject(err);
      }
    });
  },
  getHistoryById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const histories = await models.History.findById(req.query.id).populate(
          'status',
          'item'
        );
        resolve(histories);
      } catch (err) {
        reject(err);
      }
    });
  },
  createHistory: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const status = await models.Status.findOne({
          _id: data.statusId,
        });
        const item = await models.Cart.findOne({
          _id: data._id,
        });
        const history = await models.History.create({
          price: data.price,
          status: status,
          item: item,
        });
        resolve({
          errCode: 0,
          errMessage: 'Created History Successfully',
          history,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  updateHistory: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const history = await models.History.findOneAndUpdate(
          {
            _id: req.query.id,
          },
          {
            price: data.price,
          }
        );
        resolve({
          errCode: 0,
          errMessage: 'Updated History Successfully',
          history,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  deleteHistory: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const history = await models.History.findOneAndDelete({
          _id: req.query.id,
        });
        resolve({
          errCode: 0,
          errMessage: 'Deleted History Successfully',
          history,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
