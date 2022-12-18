const models = require('../../models');

module.exports = {
  getAllOrders: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const orders = await models.Order.find();
        resolve(orders);
      } catch (err) {
        reject(err);
      }
    });
  },
  getOrderById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const order = await models.Order.findById(req.query.id);
        resolve(order);
      } catch (err) {
        reject(err);
      }
    });
  },
  updateOrder: async function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        if (
          !data.status === 3 ||
          !data.status === 1 ||
          !data.status === 2 ||
          !data.status === 0 ||
          !data.status
        ) {
          resolve({
            errorCode: 1,
            errMessage: 'Invalid status',
          });
        }
        let order = await models.Order.findById({ _id: data._id });
        if (order) {
          order.status = data.status;
          await order.save();
          resolve({
            errCode: 0,
            errMessage: 'Update order successfully',
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: 'Order not found',
          });
        }
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  },
  getOrderUser: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const order = await models.Order.find({ userId: req.user.id });
        resolve(order);
      } catch (err) {
        reject(err);
      }
    });
  },
};
