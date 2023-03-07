const express = require("express");
const todoRoutes = express.Router();

const { addTodo } = require("../../controllers/todoControllers/addTodo");

todoRoutes.post("/addTodo", addTodo);

module.exports = { todoRoutes };
