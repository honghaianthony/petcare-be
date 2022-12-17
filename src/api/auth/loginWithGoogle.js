const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const models = require('../../models');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const util = require('../../utilities/jwt');

router.post('/google', async (req, res) => {
  const { credential } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { name, email, email_verified, family_name, given_name } =
    ticket.getPayload();
  if (email_verified) {
    await models.User.findOne({ email }).exec((err, user) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong...',
        });
      } else {
        if (user) {
          const jwt = util.issueJWT(user);
          const { _id, name, email } = user;
          return res.status(200).json({
            message: 'Success',
            success: true,
            token: jwt.token,
            expires: jwt.expires,
            user: {
              _id,
              name,
              email,
              firstName: given_name,
              lastName: family_name,
            },
          });
        } else {
          let newUser = new models.User({
            name,
            email,
            userName: email,
            firstName: given_name,
            lastName: family_name,
            role: 1,
            avatar:
              'https://i.pinimg.com/564x/e6/4b/ec/e64beca1b9921925b59671bbf74b9837.jpg',
          });
          newUser.save((err, data) => {
            if (err) {
              return res.status(400).json({
                error: 'Something went wrong...',
              });
            }
            const jwt = util.issueJWT(data);
            const { _id, name, email } = data;

            return res.status(200).json({
              message: 'Success',
              success: true,
              token: jwt.token,
              expires: jwt.expires,
              user: {
                _id,
                name,
                email,
                firstName: given_name,
                lastName: family_name,
              },
            });
          });
        }
      }
    });
  }
});

module.exports = router;
