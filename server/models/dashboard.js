const mongoose = require('mongoose');

const dashboardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 256
    },
    columns: [{
        name: {
            type: String,
            required: true,
            max: 256,
        },
        position: {
            type: mongoose.Schema.Types.Number,
            required: true,
            max: 256,
        },
        cards: [{
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
            tasks: [{
                check: {
                    type: mongoose.Schema.Types.Boolean,
                    default: false
                },
                name: {
                    type: String,
                    max: 256,
                    required: true
                }
            }],
        }],
    }]
});

module.exports = mongoose.model('Dashboard', dashboardSchema);