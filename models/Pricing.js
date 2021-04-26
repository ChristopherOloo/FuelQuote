const mongoose = require("mongoose")

const pricingSchema = new mongoose.Schema({
  diesel: {
    type: Number,
    default: 1.713
  },
  kerosene: {
    type: Number,
    default: 1.688
  },
  gasoline: {
    type: Number,
    default: 1.986
  },
  propane: {
    type: Number,
    default: 0.902
  }
})

module.exports = mongoose.model("Price", pricingSchema)
