const Joi = require("joi")

module.exports = {
  loginValidation: (data) => {
    const login_ValidationSchema = Joi.object({
      userID:Joi.number().required().min(8),
      password: Joi.string().required().min(6)
    })

    return login_ValidationSchema.validate(data)
  },
  registerValidation: (data) => {
    const register_ValidationSchema = Joi.object({
      username:Joi.string().required().min(6),
      userID:Joi.number().integer().min(8).required(),
      password: Joi.string().required().min(6)
    })

    return register_ValidationSchema.validate(data)
  },
  clientProfileValidation: (data) => {
    const clientProfile_ValidationSchema = Joi.object({
      fullname:Joi.string().required().min(10).max(150),
      phone_number:Joi.string().min(10).max(20).required(),
      address: Joi.string().required(),
      location: Joi.string().required(),
      state: Joi.string().required(),
    })

    return clientProfile_ValidationSchema.validate(data)
  }
}
