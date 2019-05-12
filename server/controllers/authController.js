const User = require('../models/user');
const config = require('../configurations/config');
const jwt = require('jsonwebtoken');


exports.login = function (req, res) {
    console.log("login");
    User.findOne({email: req.body.email}, function (err, user) {
        if (user === null) {
            res.status(400).json({
                message: "User not found."
            });
        } else {
            if (user.validPassword(req.body.password)) {
                const payload = {

                    check: true

                };
                let token = jwt.sign(payload, config.secret, {
                    expiresIn: 1000, // expires in 100 min
                });
                console.log(token);
                return res.status(201).send({
                    message: "User Logged In",
                    token: token
                })
            } else {
                return res.status(400).send({
                    message: "Wrong Password"
                });
            }
        }
    });
};


exports.signup = function (req, res) {

    let newUser = new User();

    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.setPassword(req.body.password);

    newUser.save((err, User) => {
        if (err) {
            return res.status(400).send({
                message: "Failed to add user."
            });
        } else {
            return res.status(201).send({
                message: "User added succesfully."
            });
        }
    });
};