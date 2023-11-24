const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
    default: null,
  },
  name: {
    type: String,
    required: false,
    default: null,
  },

  email: {
    type: String,
    required: false,
    default: null,
  },

  password: {
    type: String,
    required: false,
    default: null,
  },
});

const user = mongoose.model('Users', userSchema);

module.exports = user;
