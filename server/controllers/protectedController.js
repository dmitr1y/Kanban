const jwt = require('jsonwebtoken');
const config = require('../configurations/config');

exports.ProtectedRoutes = (req, res, next) => {
  if (req.path === '/auth/login' || req.path === '/auth/signup') {
    next();
  } else {
    const token = req.headers['authorization'];

    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          res.status(403).json({message: 'invalid token'});
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(403).json({
        message: 'No token provided.',
      });
    }
  }
};

