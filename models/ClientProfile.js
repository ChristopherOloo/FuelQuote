const mongoose = require('mongoose');

const clientProfileSchema = new mongoose.Schema({
  userID: {
    type: Number,
    min: 8
  },
  fullname: {
    type: String,
    required: true,
    max: 150
  },
  phone_number: {
    type: String,
    required: true,
    max: 20,
    min: 10
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('ClientProfile', clientProfileSchema)
