const mongo = require('./db');
const mongoose = require('mongoose');

module.exports = mongo.model('Location', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
}));
