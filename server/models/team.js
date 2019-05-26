const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 256,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  image: String,
});

const Team = module.exports = mongoose.model('Team', TeamSchema);
