const mongoose = require('mongoose');

const dashboardSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    cards:[
        {
          type: cardSchema
        }
    ]
});

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tasks: [{
        type: taskSchema
    }
    ]
});

const taskSchema = mongoose.Schema({
    check : {
        type: Boolean,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
});
const Dashboard = module.exports = mongoose.model('Dashboard', dashboardSchema);