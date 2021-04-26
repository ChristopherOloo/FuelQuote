const route = require("express").Router();
const mainControllers = require("../controllers/mainControllers")

// Application Routes.
route.get('', mainControllers.indexHomepage)
route.get('/register', mainControllers.homepageRegister)
route.post("/register", mainControllers.register)
route.get("/:userID/client-profile", mainControllers.homepageClientProfile)
route.get('/:userID/dashboard', mainControllers.homepageDashboard)
route.get('/:userID/fuelQuote', mainControllers.homepageFuelQuote)

module.exports = route
