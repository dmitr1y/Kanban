const Task = require('../models/task').model;

exports.get = (req, res) => {
    Task.findOne({_id: req.body.id}, (err, task) => {
        if (err || task == null) {
            return res.status(400).json({
                message: "Task not found."
            });
        } else {
            res.json({
                task
            });
        }
    });
};

exports.create = (req, res) => {
    let newTask = new Task;
    newTask.name = req.body.name;
    newTask.save((err, task) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to create task.",
            });
        } else {
            return res.json({
                task
            });
        }
    });

};

exports.delete = (req, res) => {
    Task.findOneAndRemove({_id: req.body.id})
        .then((docs)=>{
            if(docs) {
                res.json({
                    message: "Task deleted"
                })
            } else {
                res.status(404).json({message: "Task didn't exist"})
            }
        }).catch((err)=>{
        res.status(400).json({
            message: "Error"
        })
    })
};
exports.getList = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to get tasks.",
            });
        }
        let taskMap = {};
        tasks.forEach(function (task) {
            taskMap[task._id] = task;
        });
        res.json({taskMap})
    });
}