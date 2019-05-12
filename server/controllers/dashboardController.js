const Dashboard = require('../models/dashboard');

exports.get = function (req, res) {
    Dashboard.findOne({_id: req.body._id}, function (err, dashboard) {
        if (err || dashboard == null) {
            return res.status(400).json({
                message: "User not found."
            });
        } else {
            res.json({
                dashboard
            });
        }
    });
};

exports.create=function (req, res) {
    let newDashboard= new Dashboard;
    newDashboard.name=req.name;
    newDashboard.save((err, dashboard) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to create dashboard."
            });
        } else {
            return res.json({
                dashboard
            });
        }
    });

};