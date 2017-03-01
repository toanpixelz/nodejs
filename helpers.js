const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_OWNER = require('./constants').ROLE_OWNER;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;
const jwt = require('jsonwebtoken');

// Set user info from request
exports.setUserInfo = function setUserInfo(request) {
  const getUserInfo = {
    id: request.id,
    name: request.name,
    phone: request.phone,
    email: request.email,
    role: request.role
  };

  return getUserInfo;
};

exports.setUserInfoFacebook = function setUserInfoFacebook(request) {
  const getUserInfo = {
    id: request.id,
    name: request.facebookName,
    phone: request.phone,
    email: request.email,
    role: request.role
    // facebookId: request.facebookId
  };

  return getUserInfo;
};
