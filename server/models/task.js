const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    check: {
        type: mongoose.Schema.Types.Boolean,
        default: false
    },
    name: {
        type: String,
        max: 256,
        required: true
    },
    position: {
        type: mongoose.Schema.Types.Number,
        required: true,
        max: 256,
    },

});

const taskModel = mongoose.model('Task', taskSchema);

const Task = {
    model: taskModel,
    schema: taskSchema,
};

module.exports = Task;