const historyService = require('./history.service');

module.exports = {
  getAllHistories: async function (req, res) {
    try {
      const histories = await historyService.getAllHistories();
      res.status(200).json(histories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getHistoryById: async function (req, res) {
    try {
      const histories = await historyService.getHistoryById(req);
      res.status(200).json(histories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createHistory: async function (req, res) {
    try {
      const histories = await historyService.createHistory(req);
      res.status(200).json(histories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateHistory: async function (req, res) {
    try {
      const histories = await historyService.updateHistory(req);
      res.status(200).json(histories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteHistory: async function (req, res) {
    try {
      const histories = await historyService.deleteHistory(req);
      return res.status(200).json(histories);
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
  },
};
