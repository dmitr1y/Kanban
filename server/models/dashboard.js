const mongoose = require('mongoose');
const Column = require('./column');

const dashboardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 256
    },
    columns: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'Column' }],
    required: false,
});

module.exports = mongoose.model('Dashboard', dashboardSchema);