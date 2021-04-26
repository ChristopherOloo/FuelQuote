const route = require("express").Router();
const mainControllers = require("../controllers/mainControllers")

// API Routes.
route.post("/login", mainControllers.login)
route.post("/:userID/client-profile", mainControllers.clientProfile)
route.post("/fuelQuote", mainControllers.fuelQuote)

module.exports = route
