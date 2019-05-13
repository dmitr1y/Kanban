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
    let newColumn = new Column;
    newColumn.name = req.body.name;
    newColumn.save((err, column) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to create column.",
            });
        } else {
            return res.json({
                column
            });
        }
    });

};

exports.delete = (req, res) => {
    Column.findOneAndRemove({_id: req.body.id})
        .then((docs) => {
            if (docs) {
                res.json({
                    message: "Column deleted"
                })
            } else {
                res.status(404).json({message: "Column didn't exist"})
            }
        }).catch((err) => {
        res.status(400).json({
            message: "Error"
        })
    })
};