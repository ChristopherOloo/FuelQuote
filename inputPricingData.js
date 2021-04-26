require("dotenv").config()
const mongoose = require("mongoose")
const Pricing = require("./models/Pricing")

// Mongoose Database Setup.
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Database Connection.
const db = mongoose.connection

db.on("error", console.error.bind("console", "Connection To The MongoDB Failed!"))
db.once("open", () => {
  console.log("Successfully Connected To The MongoDB.")
})

// Set Pricing Module Into DB.
const setPricingData = async () => {
  try {
    const pricingData = new Pricing()
    await pricingData.save((err, results) => {
      if(err) console.log(err.message)
      console.log(results)
      db.close()
    })
  }catch(err){
    console.log(err.message)
  }
}

setPricingData()
