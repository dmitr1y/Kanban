const mongoose = require('mongoose');
const Column = require('./column').schema;

const dashboardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 256
    },
    columns: [Column],
    required: false,
});

const dashboardModel = mongoose.model('Dashboard', dashboardSchema);

const Dashboard = {
    model: dashboardModel,
    schema: dashboardSchema,
};

module.exports = Dashboard;