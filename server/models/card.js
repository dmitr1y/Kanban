const mongoose = require('mongoose');
const Task = require('./task').schema;

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
    position :{
        type: mongoose.Schema.Types.Number,
        required: true,
        max: 256,
    },
    isUrgently: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },
    tasks: [Task],
});

const cardModel = mongoose.model('Card', cardSchema);

const Card = {
    model: cardModel,
    schema: cardSchema,
};
module.exports = Card;