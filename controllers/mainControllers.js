const validation = require("../validation")
const UserCredential = require("../models/UserCredentials")
const ClientProfile = require("../models/ClientProfile")
const Pricing = require("../models/Pricing")
const bcrypt = require("bcryptjs")

module.exports = {
  // API Controllers.
  login: async (req, res) => {
    try {
      // Validate User Inputs.
      const { error } = validation.loginValidation(req.body)

      if(error) {
        return (
          res.render('index', {
            error: {
              message: error.message
            }
          })
        )
      }

      // Check If User Exits
      const user = await UserCredential.findOne({
        userID: req.body.userID
      })
      if(!user){
        return (
          res.render('index', {
            error: {
              message: "User Not Found, Sign Up."
            }
          })
        )
      }else {
        // Check If Password Matches With The Encrypted.
        const passwordMatches = await bcrypt.compare(req.body.password, user.password)
        if(!passwordMatches) {
          return(
            res.render('index', {
              error: {
                message: "Invalid Password!"
              }
            })
          )
        }else {
          res.redirect(`/${user.userID}/dashboard`)
        }
      }

    }catch(err){
      res.status(400).json({
        code: 400,
        message: err.message
      })
    }
  },
  register: async (req, res) => {
    try {
      // Validate User Inputs.
      const { error } = validation.registerValidation(req.body)

      if(error){
        return (
          res.render('register', {
            error: {
              message: error.message
            }
          })
        )
      }

      // Check If User Exits
      const user = await UserCredential.findOne({
        userID: req.body.userID
      })
      if(user){
        return (
          res.render('register', {
            error: {
              message: 'User Already Exists'
            }
          })
        )
      }

      // Encrypt Password.
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      // Create New User.
      const newUser = new UserCredential({
        username: req.body.username,
        userID: req.body.userID,
        password: hashedPassword
      })

      await newUser.save((err, results) => {
        if(err){
          return (
            res.render('register', {
              error: {
                message: err.message
              }
            })
          )
        }
        res.redirect(`/${results.userID}/client-profile`)
      })

    }catch(err){
      res.render('register', {
        error: {
          message: err.message
        }
      })
    }
  },
  clientProfile: async (req, res) => {
    try{
      // Validate User Inputs.
      const { error } = validation.clientProfileValidation(req.body)
      if(error) {
        return (
          res.render('clientProfile', {
            error: {
              message: error.message
            }
          })
        )
      }

      // Check Params (userID) matches with the DB user id.
      const user = await UserCredential.findOne({
        userID: req.params.userID
      })

      if(!user) return res.status(400).json({
        code: 400,
        message: `User With ID ${req.params.userID} Not Found`
      })

      // Save Client Information.
      const clientInfo = new ClientProfile({
        userID: req.params.userID,
        fullname:req.body.fullname,
        phone_number: req.body.phone_number,
        address: req.body.address,
        location: req.body.location,
        state: req.body.state
      })

      await clientInfo.save((err, results) => {
        if(err) return res.status(400).json({
          code: 400,
          message: err.message
        })
        res.json({
          results
        })
      })

    }
    catch(err){
      res.status(400).json({
        code: 400,
        message: err.message
      })
    }
  },
  fuelQuote: async (req, res) => {
    console.log(req.body)
  },

  // Application Controllers.
  indexHomepage : (req, res) => {
    res.render('index', {
      title: 'Homepage'
    })
  },
  homepageRegister: (req, res) => {
    res.render('register', {
      title: 'Register'
    })
  },
  homepageClientProfile: async (req, res) => {
    // Check Params (userID) matches with the DB user id.
    const user = await UserCredential.findOne({
      userID: req.params.userID
    })
    if(!user) {
      return (
        res.render('404error-page', {
          title: 'Page Not Found'
        })
      )
    }else{
      return (
        console.log(req.params.userID)
      )
    }
  },
  homepageDashboard: async (req, res) => {
    try {
      const clientInfo = await ClientProfile.findOne({
        userID: req.params.userID
      })
      const prices = await Pricing.findOne()
      console.log(prices)
      res.render('dashboard', {
        clientInfo,
        prices
      })
    }catch(err) {
      console.log(err.message)
    }
  },
  homepageFuelQuote: async (req, res) => {
    try{
      const clientInfo = await ClientProfile.findOne({
        userID: req.params.userID
      })
      const prices = await Pricing.findOne()
      console.log(prices)
      res.render('fuelQuote', {
        clientInfo,
        prices
      })
    }catch(err){
      console.log(err.message)
    }
  },

  // Error Handling.
  error404: (err, res, next) => {
    res.status(404).render('404error-page')
  }
}
