// Validation package
const joi = require("joi");

// Schema
const authSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  password: joi.string().min(3).max(30).required(),
});

// Validation functions
function validateUser({ username, password }) {
  const result = authSchema.validate({
    username,
    password,
  });

  return result;
}

module.exports = { validateUser };
