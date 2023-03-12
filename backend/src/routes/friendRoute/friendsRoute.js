const express = require("express");
const friendRoutes = express.Router();

const { addFriend } = require("../../controllers/friendControllers/addFriend");

friendRoutes.post("/addFriend", addFriend);

module.exports = { friendRoutes };
