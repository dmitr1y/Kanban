const mongoose = require('mongoose');
const Card = require('./card').schema;

const columnSchema = mongoose.Schema({
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
    cards: [Card],
});
const columnModel = mongoose.model('Column', columnSchema);

const Column = {
    model: columnModel,
    schema: columnSchema,
};
module.exports = Column;