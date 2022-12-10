const express = require('express');
const models = require('../../models');
const router = express.Router();
const passport = require('passport');

router.post(
  '/create-order',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      // Test mua thất bại
      // console(1);
      const r = await models.Order.create({ ...req.body, userId: req.user.id });
      res.status(200).json({ errCode: 200, mess: 'Đặt hàng thành công' });
    } catch (error) {
      res.status(201).json({ errCode: 201, mess: 'Lỗi hệ thống' });
    }
  }
);
module.exports = router;
