const models = require('../../models');
const util = require('../../utilities/jwt');

module.exports = {
  getAllUsers: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        let users = await models.User.find().select('-password');
        resolve(users);
      } catch (e) {
        reject(e);
      }
    });
  },
  getUserById: function (req) {
    const userId = req.query.userId;
    return new Promise(async function (resolve, reject) {
      try {
        var user = await models.User.findOne({ _id: userId }).select(
          '-password'
        );
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  },
  updateRole: async function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!data.role === 2 || !data.role === 1 || !data.role) {
          resolve({
            errorCode: 1,
            errMessage: 'Invalid role',
          });
        }
        if (!data.userId) {
          resolve({
            errorCode: 1,
            errMessage: 'Missing input parameter',
          });
        }
        let user = await models.User.findById({ _id: data.userId });
        if (user) {
          user.role = data.role;
          await user.save();
          resolve({
            errCode: 0,
            errMessage: 'Update role successfully',
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: 'Role not found',
          });
        }
      } catch (e) {
        reject(e);
      }
    });
  },
  updateUserInfo: function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const user = await models.User.findOneAndUpdate(
          {
            _id: req.query.id,
          },
          {
            email: data.email,
            phone: data.phone,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
          }
        );
        const jwt = util.issueJWT(user);
        resolve({ errCode: 0, token: jwt.token });
      } catch (err) {
        reject(err);
      }
    });
  },
  deleteUser: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const userId = req.query.userId;
        const user = await models.User.findOne({ _id: userId });
        if (user) {
          await models.User.deleteOne({ _id: userId });
          resolve({ errCode: 0 });
        } else {
          resolve({ errCode: 1 });
        }
      } catch (e) {
        reject(e);
      }
    });
  },
};
