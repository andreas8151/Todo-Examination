const express = require("express");
const authRoutes = express.Router();

const { login } = require("../../controllers/authControllers/login");
const { register } = require("../../controllers/authControllers/register");

authRoutes.post("/login", login);
authRoutes.post("/register", register);

module.exports = { authRoutes };
