const Dashboard = require('../models/dashboard').model;

exports.get = (req, res) => {
    Dashboard.findOne({_id: req.body.id}, (err, dashboard) => {
        if (err || dashboard == null) {
            return res.status(400).json({
                message: "Dashboard not found."
            });
        } else {
            res.json({
                dashboard
            });
        }
    });
};

exports.create = (req, res) => {
    let newDashboard = new Dashboard;
    newDashboard.name = req.body.name;
    newDashboard.save((err, dashboard) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to create dashboard.",
            });
        } else {
            return res.json({
                dashboard
            });
        }
    });

};

exports.delete = (req, res) => {
    Dashboard.findOneAndRemove({_id: req.body.id}, (err, count) => {
        if (err) {
            res.status(401).json({
                message: "Failed to delete dashboard.",
            });
        }
        if (!count) {
            res.status(404).json({
                message: "Dashboard not found",
            })
        }
        res.json({
            message: "Dashboard deleted",
        })
    });
};
exports.getList = (req, res) => {
    Dashboard.find({}, (err, dashboards) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to get dashboards.",
            });
        }
        let dashboardMap = {};
        dashboards.forEach(function (dashboard) {
            dashboardMap[dashboard._id] = dashboard;
        });
        res.json({dashboardMap})
    });
}