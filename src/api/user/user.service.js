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
  getCartForUser: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        let user = await models.User.findOne({ _id: req.user.id });
        let res = [];

        for (let i = 0; i < user.carts.length; ++i) {
          const r = await models.Product.findById(user.carts[i].productId);
          res.push({
            _id: user.carts[i]._id,
            productId: user.carts[i].productId,
            amount: user.carts[i].amount,
            name: r.name,
            price: r.price,
            sale: r.sale,
            img: r.img,
          });
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  },
  addCartItem: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        let user = await models.User.findOne({ _id: req.user.id });
        for (let i = 0; i < user.carts.length; ++i)
          if (user.carts[i].productId.toString() === req.body.productId) {
            user.carts[i].amount += req.body.amount;
            await user.save();
            resolve({ errCode: 200 });
            return;
          }
        user.carts.push(req.body);
        await user.save();
        resolve({ errCode: 200 });
      } catch (e) {
        reject(e);
      }
    });
  },
  deleteCartItem: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        let user = await models.User.findOne({ _id: req.user.id });
        let arr = [...user.carts];
        user.carts = [];
        for (let i = 0; i < arr.length; ++i) {
          if (!(arr[i]._id.toString() === req.query.id))
            user.carts.push(arr[i]);
        }

        await user.save();

        resolve(user);
        // resolve({errCode:200});
      } catch (e) {
        reject(e);
      }
    });
  },
};
