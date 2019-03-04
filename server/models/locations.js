const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  coords: {
    type: Number,
    index: '2dsphere'
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
});

mongoose.Model('Location', locationSchema);
