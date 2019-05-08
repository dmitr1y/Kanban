const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    check : {
        type: Boolean,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String
    }
});