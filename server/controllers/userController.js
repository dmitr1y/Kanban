const User = require('../models/user');

exports.getInfo = (req, res) => {
    User.findOne({email: req.query.email}, (err, user) => {
        if (err || !user) {
            res.status(404).json({
                message: "User not found."
            });
        } else {
            res.json({
                user : {
                    name: user.name,
                    email: user.email,
                },
            });
        }
    });
};
