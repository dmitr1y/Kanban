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
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task'
        }
    }
    ]
});
