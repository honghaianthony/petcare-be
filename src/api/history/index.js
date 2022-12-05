const express = require('express');
const router = express.Router();
const passport = require('passport');

const historyController = require('./history.controller');

router.get('/get-all-histories', historyController.getAllHistories);
router.get('/get-history-by-id', historyController.getHistoryById);
router.post(
  '/create-history',
  passport.authenticate('jwt', { session: false }),
  historyController.createHistory
);
router.put(
  '/update-history',
  passport.authenticate('jwt', { session: false }),
  historyController.updateHistory
);
router.delete(
  '/delete-history',
  passport.authenticate('jwt', { session: false }),
  historyController.deleteHistory
);

module.exports = router;
