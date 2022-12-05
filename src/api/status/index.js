const express = require('express');
const router = express.Router();
const passport = require('passport');

const statusController = require('./status.controller');

router.get('/get-all-status', statusController.getAllStatus);
router.get('/get-status-by-id', statusController.getStatusById);
router.post(
  '/create-status',
  passport.authenticate('jwt', { session: false }),
  statusController.createStatus
);
router.delete(
  '/delete-status',
  passport.authenticate('jwt', { session: false }),
  statusController.deleteStatus
);

module.exports = router;
