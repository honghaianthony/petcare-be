const statusService = require('./Status.service');

module.exports = {
  getAllStatus: async function (req, res) {
    try {
      const status = await statusService.getAllStatus();
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getStatusById: async function (req, res) {
    try {
      const Status = await statusService.getStatusById(req);
      res.status(200).json(Status);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createStatus: async function (req, res) {
    try {
      const Status = await statusService.createStatus(req);
      res.status(200).json(Status);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteStatus: async function (req, res) {
    try {
      const Status = await statusService.deleteStatus(req);
      res.status(200).json(Status);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
