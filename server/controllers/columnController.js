const Dashboard = require('../models/dashboard').model;
const Column = require('../models/column').model;

exports.get = (req, res) => {
    Column.findById(req.body.id, (err, column) => {
        if (err || column == null) {
            return res.status(400).json({
                message: "Column not found."
            });
        } else {
            res.json({
                column
            });
        }
    });
};

exports.create = (req, res) => {
    Dashboard.findById(req.body.id, (err, dashboard) => {
        if (err || dashboard == null) {
            return res.status(401).json({
                message: "Failed to get dashboard",
            });
        }
        let max = 0;
        for (let i = 0; i < dashboard.columns.length; i++) {
            if (max < dashboard.columns[i].position) {
                max = dashboard.columns[i].position;
            }
        }
        dashboard.columns.push({name: req.body.name, position: max + 1});
        dashboard.save(function (err) {
            if (err) {
                return res.status(401).json({
                    message: "Failed to save dashboard",
                });
            }
            res.json({
                dashboard
            });
        });
    });
};

exports.delete = (req, res) => {

    Dashboard.findById(req.body.dashboardId, (err, dashboard) => {
        if (err) {
            console.log("дима не прав");
            res.status(404).json({
                message: "Failed to get dashboard.",
            });
        }
        if (!dashboard.columns.id(req.body.columnId)) {
            res.status(404).json({
                message: "Failed to get column",
            });
            return;
        }
        let pos = dashboard.columns.id(req.body.columnId).position;
        dashboard.columns.pull(req.body.columnId);
        for (let i = 0; i < dashboard.columns.length; i++) {
            if (pos < dashboard.columns[i].position) {
                dashboard.columns[i].position = dashboard.columns[i].position - 1;
            }
        }
        dashboard.save(function (err) {
            if (err) {
                return res.status(401).json({
                    message: "Failed to save dashboard",
                });
            }
            res.json({
                dashboard
            });
        });
    });
};