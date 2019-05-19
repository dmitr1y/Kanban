const Column = require("../models/column");
const Dashboard = require('../models/dashboard').model;


exports.get = (req, res) => {
    Dashboard.findById(req.body.dashboardId, (err, dashboard) => {
        if (err || dashboard == null) {
            res.status(404).json({
                message: "Dashboard not found."
            });
        } else {
            if (dashboard.columns.id(req.body.columnId)) {
                res.json({
                    column: dashboard.columns.id(req.body.columnId)
                });
            } else {
                res.status(404).json({
                    message: "Column not found."
                });
            }
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

exports.update = (req, res) => {
    if(!req.body.name||!req.body.columnId||!req.body.position||!req.body.dashboardId){
        return res.status(404).json({
            message: "Not found",
        });
    }
    Dashboard.findById(req.body.dashboardId, (err, dashboard) => {
        if (err || dashboard == null) {
            return res.status(404).json({
                message: "Failed to get dashboard",
            });
        }
        let column =dashboard.columns.id(req.body.columnId);
        if (!column) {
            return res.status(404).json({
                message: "Failed to get column.",
            });
        }
        if(req.body.position>dashboard.columns.length)
        {
            return res.status(404).json({
                message: "Wrong data",
            });
        }
        column.name=req.body.name;
        column.position=req.body.position;

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
exports.getCards = (req, res) => {
    Dashboard.findById(req.body.id, (err, dashboard) => {
        if (err || dashboard == null) {
            return res.status(404).json({
                message: "Dashboard not found."
            });
        } else {
            let column = dashboard.columns.id(res.body.columnId);
            if (column) {
                return res.json({
                    columns: column.cards,
                });
            } else {
                return res.status(404).json({
                    message: "Column not found."
                });
            }
        }
    });
};