const User = require('../models/user');
const config = require('../configurations/config');
const jwt = require('jsonwebtoken');

exports.login = function(req, res) {
  User.findOne({email: req.body.email}, (err, user) => {
    if (user === null) {
      res.status(404).json({
        message: 'User not found.',
      });
    } else {
      if (user.validPassword(req.body.password)) {
        const payload = {
          check: true,
        };

        let token = jwt.sign(payload, config.secret, {
          expiresIn: 100000000, // expires in 100 min
        });

        return res.status(201).send({
          message: 'User Logged In',
          jwt: token,
        });
      } else {
        return res.status(400).send({
          message: 'Wrong Password',
        });
      }
    }
  });
};

exports.signup = (req, res, next) => {
  let newUser = new User();

  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(401).json({
      message: 'Wrong request',
    });
    next();
  }

  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.setPassword(req.body.password);

  newUser.save((err, User) => {
    if (err) {
      return res.status(400).send({
        message: 'Failed to add user.',
      });
    } else {
      const resultUser = Object.assign({}, User);
      delete resultUser.password;

      return res.status(201).send({
        message: 'User added successfully.',
        user: resultUser.toJson(),
      });
    }
  });
};
