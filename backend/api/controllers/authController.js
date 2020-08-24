const express_jwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const config = require('../../config/keys.js');

// Helper function / middleware to verify the token
exports.isAuthenticated = (req, res, next) => {
  const { headers: { authorization } } = req
  if(authorization && authorization.split(' ')[0] === 'Bearer') {
    let authorizationToken = authorization.split(' ')[1];
    jwt.verify(authorizationToken, config.secretOrKey, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: 'Failed to authenticate' });
        } else {
            req.authorId = decoded.id;
            next();
        }
      });
  }else {
   res.status(403).json({ error: 'No token provided' })
  }
};

// TODO Remove this later.
// exports.ctrl = {
//   required: express_jwt({
//     secret: config.secretOrKey,
//     userProperty: 'payload',
//     getToken: getTokenFromHeaders,
//     algorithms: ['HS256']
//   }),
//   optional: express_jwt({
//     secret: config.secretOrKey,
//     userProperty: 'payload',
//     getToken: getTokenFromHeaders,
//     credentialsRequired: false,
//     algorithms: ['HS256']
//   }),
// };
