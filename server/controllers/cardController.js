const Dashboard = require('../models/dashboard').model;
//TODO: добавить проверку запроса

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
                    res.json({
                        card: card,
                    });
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
        let max = 0;
        for (let i = 0; i < column.cards.length; i++) {
            if (max < column.cards[i].position) {
                max = column.cards[i].position;
            }
        }
        column.cards.push({
            name: req.body.name,
            position: max + 1,
            description: req.body.description,
            isUrgently: req.body.isUrgently
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
        let pos = column.cards.id(req.body.cardId).position;
        column.pull(req.body.cardId);
        for (let i = 0; i < column.cards.length; i++) {
            if (pos < column.cards[i].position) {
                column.cards[i].position = column.cards[i].position - 1;
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
    if (!req.body.name || !req.body.columnId || !req.body.position || !req.body.dashboardId || !req.body.cardId || !req.body.description || !req.body.isUrgently) {
        return res.status(404).json({
            message: "Not found",
        });
    }
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
        if (req.body.position > column.cards.length) {
            return res.status(404).json({
                message: "Wrong data",
            });
        }
        card.name = req.body.name;
        card.description = req.body.description;
        card.isUrgently = req.body.isUrgently;
        card.position = req.body.position;
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
exports.getTasks = (req, res) => {
    Dashboard.findById(req.body.id, (err, dashboard) => {
        if (err || dashboard == null) {
            return res.status(404).json({
                message: "Dashboard not found."
            });
        } else {
            let column = dashboard.columns.id(res.body.columnId);
            if (column) {
                let card = column.cards.id(req.body.cardId);
                if (card) {
                    return res.json({
                        tasks: card.tasks,
                    });
                } else {
                    return res.status(404).json({
                        message: "Card not found."
                    });
                }
            } else {
                return res.status(404).json({
                    message: "Column not found."
                });
            }
        }
    });
};