const express = require('express');
const router = express.Router();
const passport = require('passport');

const serviceController = require('./service.controller');

router.get(
  '/get-all-services',
  passport.authenticate('jwt', { session: false }),
  serviceController.getAllServices
);
router.get(
  '/get-service-by-id',
  passport.authenticate('jwt', { session: false }),
  serviceController.getServiceById
);
router.post('/create-service', serviceController.createService);
router.delete(
  '/delete-service',
  passport.authenticate('jwt', { session: false }),
  serviceController.deleteService
);

module.exports = router;
