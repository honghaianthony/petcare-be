const orderService = require('./order.service');

module.exports = {
  getAllOrders: async function (req, res) {
    try {
      const orders = await orderService.getAllOrders();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getOrderById: async function (req, res) {
    try {
      const order = await orderService.getOrderById(req);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateOrder: async function (req, res) {
    try {
      const order = await orderService.updateOrder(req.body);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
