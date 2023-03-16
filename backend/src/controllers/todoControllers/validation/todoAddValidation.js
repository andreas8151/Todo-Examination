// Validation package
const joi = require("joi");

// Schema
const authSchema = joi.object({
  title: joi.string().min(1).max(22).required(),
  description: joi.string().min(1).max(22).required(),
});

// Validation functions
function validateAddTodo({ title, description }) {
  const result = authSchema.validate({
    title,
    description,
  });

  return result;
}

module.exports = { validateAddTodo };
