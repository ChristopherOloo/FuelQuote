const mongoose = require("mongoose")

const userCredentialsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6
  },
  userID: {
    type: Number,
    required: true,
    min: 8
  },
  password: {
    type: String,
    required: true,
    min: 6
  }
})

module.exports = mongoose.model("UserCredential", userCredentialsSchema)
