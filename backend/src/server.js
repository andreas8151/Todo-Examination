//express create
const express = require("express");
const app = express();
const port = 5050;
//mysql
const mysql = require("mysql2");
//env
require("dotenv").config();
//cors
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//middleware
app.use(express.json());

const dataBase = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

const pool = mysql.createPool(dataBase);
module.exports = pool;

const { authRoutes } = require("./routes/authRoute/authRoute");
const { todoRoutes } = require("./routes/todoRoute/todoRoute");
const { friendRoutes } = require("./routes/friendRoute/friendsRoute");

app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
app.use("/friend", friendRoutes);

app.listen(port);
