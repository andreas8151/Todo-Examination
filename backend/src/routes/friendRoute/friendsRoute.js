const express = require("express");
const friendRoutes = express.Router();

const { addFriend } = require("../../controllers/friendControllers/addFriend");
const {
  getFriends,
} = require("../../controllers/friendControllers/getFriends");
const {
  getFriendTodos,
} = require("../../controllers/friendControllers/getFriendTodos");

friendRoutes.get("/getFriends", getFriends);
friendRoutes.post("/addFriend", addFriend);
friendRoutes.get("/getFriendTodos", getFriendTodos);

module.exports = { friendRoutes };
