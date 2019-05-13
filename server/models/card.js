const mongoose = require('mongoose');
const Task = require('./task');

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 256,
    },
    description: {
        type: String,
        max: 1024,
    },
    isUrgently: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },
    tasks: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('Card', cardSchema);