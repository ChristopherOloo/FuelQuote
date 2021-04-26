require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const PORT = 3000
const apiRoutes = require("./routes/api-routes")
const mainRoutes = require("./routes/mainRoutes")
const mainControllers = require("./controllers/mainControllers")

const app = express()

// Middlewares.
app.use(morgan("tiny"))

// Body Parser.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Routes Middlewares.
app.use("/api/user", apiRoutes)
app.use("/", mainRoutes)

// Static Files
app.use(express.static('public'))

// View Enine Setup.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Error Handling Middlewares.
app.use(mainControllers.error404)

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

app.listen( PORT, () => {
  return(
    console.log(`Server Started At http://127.0.0.1:${PORT}`)
  )
})

module.exports = app
