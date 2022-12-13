const userService = require('./user.service.js');

module.exports = {
  getAllUsers: async function (req, res, next) {
    try {
      var users = await userService.getAllUsers();
      return res.status(200).json({ users: users, message: 'Successfully' });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  },
  getUserById: async function (req, res, next) {
    try {
      var user = await userService.getUserById(req);
      return res.status(200).json({ user, message: 'Successfully' });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  },
  updateRole: async function (req, res, next) {
    try {
      const user = await userService.updateRole(req.body);
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  },
  updateUserInfo: async function (req, res) {
    try {
      const result = await userService.updateUserInfo(req);
      if (result.success == true) {
        res.status(200).json(result);
      } else {
        res.status(200).json(result);
      }
    } catch (error) {}
  },
  deleteUser: async function (req, res) {
    try {
      const result = await userService.deleteUser(req);
      if (result.success == true) {
        res.status(200).json(result);
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
