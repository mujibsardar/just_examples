const express_jwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const config = require('../../config/keys.js');

// Helper function to retrieve the token
const getTokenFromHeaders = async (req) => {
  const { headers: { authorization } } = req
  if(authorization && authorization.split(' ')[0] === 'Bearer') {
    let authorizationToken = authorization.split(' ')[1];
    jwt.verify(authorizationToken, config.secretOrKey, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: 'Failed to authenticate' });
        } else {
            console.log("====> getTokenFromHeaders else statement authorId found: " + decoded.id);
            req.authorId = decoded.id;
        }
    console.log("====> getTokenFromHeaders returning token now: " + authorizationToken);
    return authorizationToken;
  });
}else {
  return null;
}

};

exports.ctrl = {
  testGetToken: async (req, res, next) => {
    let token = await getTokenFromHeaders(req, res, next);
    console.log(`==============> ${token}`);
  },
  required: express_jwt({
    secret: config.secretOrKey,
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    algorithms: ['HS256']
  }),
  optional: express_jwt({
    secret: config.secretOrKey,
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
    algorithms: ['HS256']
  }),
};
