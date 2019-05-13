const User = require('../models/user');

exports.getInfo = (req, res) => {
    User.findOne({email: req.body.email}, (err) => {
        if (err || User === null) {
            return res.status(400).send({
                message: "User not found."
            });
        } else {
            res.json({name: req.body.name});
        }
    });
};