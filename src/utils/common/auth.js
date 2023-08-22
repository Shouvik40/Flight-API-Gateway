const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRY } = require("../../config/server-config");
const ServerConfig = require("../../config/server-config");

function checkPassword(plainPassword, encryptedPassword) {
  try {
    return bcrypt.compareSync(plainPassword, encryptedPassword);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
function createToken(input) {
  try {
    return jwt.sign(input, serverConfig.JWT_SECRET, {
      expiresIn: serverConfig.JWT_EXPIRY,
    });
  } catch (error) {
    throw error;
  }
}
function verifyToken(token) {
  try {
    return jwt.verify(token, ServerConfig.JWT_SECRET);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = {
  checkPassword,
  createToken,
  verifyToken,
};
