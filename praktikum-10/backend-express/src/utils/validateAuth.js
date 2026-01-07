const Joi = require("joi");

exports.validateRegister = (data) => {
  return Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }).validate(data);
};

exports.validateLogin = (data) => {
  return Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }).validate(data);
};
