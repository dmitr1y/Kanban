const mongoose = require('mongoose');
const Card = require('./card');

const columnSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 256
    },
    position: {
        type: mongoose.Schema.Types.Number,
        required: true,
        max: 256,
    },
    cards: [{
        type: Card
    }
    ]
});
const Column = module.exports = mongoose.model('Column', columnSchema);