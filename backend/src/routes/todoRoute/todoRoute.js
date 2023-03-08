const express = require("express");
const todoRoutes = express.Router();

const { addTodo } = require("../../controllers/todoControllers/addTodo");
const {
  getUsersTodos,
} = require("../../controllers/todoControllers/getUsersTodos");
const { deleteTodo } = require("../../controllers/todoControllers/deleteTodo");
const {
  updateTodo,
} = require("../../controllers/todoControllers/updateTodo.js");

todoRoutes.post("/addTodo", addTodo);
todoRoutes.get("/getUsersTodos", getUsersTodos);
todoRoutes.delete("/deleteTodo", deleteTodo);
todoRoutes.patch("/updateTodo", updateTodo);
module.exports = { todoRoutes };
