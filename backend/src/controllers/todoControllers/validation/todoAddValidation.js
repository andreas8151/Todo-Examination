// Validation package
const joi = require("joi");

// Schema
const authSchema = joi.object({
  todoTitle: joi.string().min(1).max(30).required(),
  description: joi.string().min(1).max(30).required(),
});

// Validation functions
function validateAddTodo({ todoTitle, description }) {
  const result = authSchema.validate({
    todoTitle,
    description,
  });

  return result;
}

module.exports = { validateAddTodo };
