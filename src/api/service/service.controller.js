const serviceService = require('./service.service');

module.exports = {
  getAllServices: async function (req, res) {
    try {
      const services = await serviceService.getAllServices();
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getServiceById: async function (req, res) {
    try {
      const service = await serviceService.getServiceById(req);
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createService: async function (req, res) {
    try {
      const service = await serviceService.createService(req);
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteService: async function (req, res) {
    try {
      const service = await serviceService.deleteService(req);
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
