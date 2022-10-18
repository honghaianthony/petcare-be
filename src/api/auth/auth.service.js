const util = require('../../utilities/jwt');
const model = require('../../models');
const fs = require('fs');

module.exports = {
  register: async function (req) {
    try {
      const hashedPassword = await util.genPasswordAsync(req.body.password);
      const user = await model.User.create({
        userName: req.body.userName,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: 1,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
      });
      const jwt = util.issueJWT(user);
      return {
        message: 'Success',
        token: jwt.token,
        expires: jwt.expires,
        success: true,
      };
    } catch (error) {
      console.log('Register Error', error);
    }
  },
  login: async function (req) {
    try {
      const { userName, password } = req.body;
      const user = await model.User.findOne({
        userName: userName,
      });
      if (user) {
        const valid = await util.validPasswordAsync(password, user.password);
        if (valid) {
          const jwt = util.issueJWT(user);

          return {
            message: 'Success',
            token: jwt.token,
            expires: jwt.expires,
            success: true,
          };
        } else {
          return {
            message: 'Incorrect password',
            success: false,
          };
        }
      }
      return { message: 'User does not exist', success: false };
    } catch (error) {
      console.log('Login Error', error);
    }
  },
};
