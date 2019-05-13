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
    }
});

module.exports = mongoose.model('Task', taskSchema);