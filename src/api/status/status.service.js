const models = require('../../models');

module.exports = {
  getAllStatus: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const Status = await models.Status.findAll();
        resolve(Status);
      } catch (error) {
        reject(error);
      }
    });
  },
  getStatusById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const Status = await models.Status.findById(req.query.id);
        resolve(Status);
      } catch (error) {
        reject(error);
      }
    });
  },
  createStatus: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const Status = await models.Status.create(req.body);
        resolve(Status, {
          errCode: 0,
          errMessage: 'Create Status Successfully',
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteStatus: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const Status = await models.Status.findOneAndDelete(req.query.id);
        resolve(Status, {
          errCode: 0,
          errMessage: 'Deleted Status Successfully',
        });
      } catch (error) {
        reject(error);
      }
    });
  },
};
