const User = require('../models/user');

exports.getInfo=function(req, res) {
    User.findOne({ email : req.body.email }, function(err) {
        if (err|| User===null) {
            return res.status(400).send({
                message : "User not found."
            });
        } else {
            res.json({ name : req.body.name });
        }
    });
}