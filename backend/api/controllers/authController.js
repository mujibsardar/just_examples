const jwt = require('express-jwt');
const config = require('../../config/keys.js');

// Helper function to retrieve the token
const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  return null;
};

exports.ctrl = {
  required: jwt({
    secret: config.secretOrKey,
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    algorithms: ['HS256']
  }),
  optional: jwt({
    secret: config.secretOrKey,
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
    algorithms: ['HS256']
  }),
};
