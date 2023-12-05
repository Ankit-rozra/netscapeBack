const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: null,
  },
  dob: {
    type: String,
    required: false,
    default: '',
  },
  salary: {
    type: String,
    required: false,
    default: '',
  },
  joining: {
    type: String,
    required: false,
    default: '',
  },
  relieving: {
    type: String,
    required: false,
    default: '',
  },
  contact: {
    type: String,
    required: false,
    default: '',
  },
  status: {
    type: String,
    required: false,
    default: 'Inactive',
  },
});

const user = mongoose.model('Users', userSchema);

module.exports = user;
