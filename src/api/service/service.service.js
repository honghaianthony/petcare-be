const models = require('../../models');

module.exports = {
  getAllServices: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const services = await models.Service.findAll();
        resolve(services);
      } catch (error) {
        reject(error);
      }
    });
  },
  getServiceById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const service = await models.Service.findById(req.query.id);
        resolve(service);
      } catch (error) {
        reject(error);
      }
    });
  },
  createService: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const service = await models.Service.create(req.body);
        resolve(service, {
          errCode: 0,
          errMessage: 'Create service Successfully',
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteService: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const service = await models.Service.findOneAndDelete(req.query.id);
        resolve(service, {
          errCode: 0,
          errMessage: 'Deleted service Successfully',
        });
      } catch (error) {
        reject(error);
      }
    });
  },
};
