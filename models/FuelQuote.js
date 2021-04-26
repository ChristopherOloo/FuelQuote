const mongoose = require("mongoose")

const fuelQuoteSchema = new mongoose.Schema({
  userFuelQuotes: [
    {
      userID: {
        type: String,
        required: true,
        min: 8
      },
      fuelType: {
        type: String,
        required: true,
      },
      gallons: {
        type: Number,
        required: true
      },
      deliveryAdddress: {
        type: String,
        required: true,
      },
      deliveryDate: {
        type: Date,
        required: true,
      },
      price: {
        type: Number,
        required: true
      },
      totalAmount: {
        type: Number,
        required: true
      },
      dateCreated: {
        type: Date,
        default: Date.now
      },
      state: {
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model("FuelQuote", fuelQuoteSchema)
