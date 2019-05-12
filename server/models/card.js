const mongoose = require('mongoose');
// const taskSchema = require('./task');
import taskSchema from './task';

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
        max: 256,
    },
    description: {
        type: String,
        max:1024
    },
    isUrgently: {
        type: mongoose.Schema.Types.Boolean,
        default: false
    },
    // children: [Task],
    tasks: [taskSchema],
    // child: Task,
});
const Card = module.exports = mongoose.model('Card', cardSchema);