const Dashboard = require('../models/dashboard').model;


exports.get = (req, res) => {
    Dashboard.findById(req.body.dashboardId, (err, dashboard) => {
        if (err || dashboard == null) {
            res.status(404).json({
                message: "Dashboard not found."
            });
        } else {
            let column = dashboard.columns.id(req.body.columnId);
            if (column) {
                let card = dashboard.columns.id(req.body.columnId).cards.id(req.body.cardId);
                if (card) {
                    let task = card.tasks.id(req.body.taskId);
                    if (task) {
                        res.json({
                            task: task,
                        });
                    } else {
                        res.status(404).json({
                            message: "Task not found."
                        });
                    }
                } else {
                    res.status(404).json({
                        message: "Card not found."
                    });
                }
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
        let column = dashboard.columns.id(req.body.columnId);
        if (!column) {
            return res.status(404).json({
                message: "Column not found",
            });
        }
        let card = column.cards.id(req.body.cardId);
        if (!card) {
            return res.status(404).json({
                message: "Card not found",
            });
        }
        let max = 0;
        for (let i = 0; i < card.tasks.length; i++) {
            if (max < card.tasks.position) {
                max = card.tasks.position;
            }
        }
        column.cards.push({
            name: req.body.name,
            position: max + 1,
        });
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
        let column = dashboard.columns.id(req.body.columnId);
        if (!column) {
            res.status(404).json({
                message: "Failed to get column",
            });
            return;
        }
        let card = column.cards.id(req.body.cardId);
        if (!card) {
            return res.status(404).json({
                message: "Card not found",
            });
        }
        let pos = card.tasks.id(req.body.taskId).position;
        card.pull(req.body.taskId);
        for (let i = 0; i < card.tasks.length; i++) {
            if (pos < card.tasks[i].position) {
                card.tasks[i].position = card.tasks[i].position - 1;
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
    Dashboard.findById(req.body.dashboardId, (err, dashboard) => {
        if (err || dashboard == null) {
            return res.status(404).json({
                message: "Failed to get dashboard.",
            });
        }
        let column = dashboard.columns.id(req.body.columnId);
        if (!column) {
            return res.status(404).json({
                message: "Failed to get column.",
            });
        }
        let card = column.cards.id(req.body.cardId);
        if (!card) {
            return res.status(404).json({
                message: "Card not found",
            });
        }
        card.tasks.id(res.body.taskId);
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
            if (column.cards.id(req.body.cardId)) {
                return res.json({
                    cards: column.cards,
                });
            } else {
                return res.status(404).json({
                    message: "Card not found."
                });
            }
        }
    });
};