const mongoose = require('mongoose');


export const taskSchema = mongoose.Schema({
    check : {
        type: mongoose.Schema.Types.Boolean,
        default: false
    },
    name: {
        type: String,
        max: 256,
        required: true
    }
});

const Task = module.exports = mongoose.model('Task', taskSchema);