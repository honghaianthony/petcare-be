const passportJWT = require('passport-jwt');
const fs = require('fs');
const path = require('path');

const User = require('../models/User');

const pathToKey = path.join(__dirname, '..', '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const { ExtractJwt, Strategy } = passportJWT;

module.exports = function (passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256'],
  };

  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findOne({ _id: payload.sub })
        .then((user) => {
          if (user) {
            return done(null, {
              id: user._id,
              role: user.role,
            });
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
