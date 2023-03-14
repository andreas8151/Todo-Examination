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

//middleware
app.use(express.json());
app.use(cookieParser());
const { checkCookie } = require("./middleware/checkCookie");

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
app.use("/todo", checkCookie, todoRoutes);
app.use("/friend", checkCookie, friendRoutes);

app.listen(port);
