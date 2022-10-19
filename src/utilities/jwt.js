const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const pathToKey = path.join(__dirname, '..', '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

async function validPasswordAsync(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

async function genPasswordAsync(password) {
  const salt = await bcrypt.genSaltSync(10);
  return await bcrypt.hashSync(password, salt);
}

function issueJWT(user) {
  const _id = user._id;
  const expiresIn = '1d';

  const fullName = `${user.firstName} ${user.lastName} `;

  const payload = {
    sub: _id,
    userId: _id,
    role: user.role,
    userName: user.userName,
    fullName: fullName,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: 'RS256',
  });

  return {
    token: signedToken,
    expires: expiresIn,
  };
}

module.exports = {
  issueJWT,
  validPasswordAsync,
  genPasswordAsync,
};
