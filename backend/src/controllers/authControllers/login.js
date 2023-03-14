const pool = require("../../server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateUser } = require("./validation/validation");
require("dotenv").config();

function login(req, res) {
  const { error, value } = validateUser(req.body);
  console.log(process.env.JWT_SECRET); //todo

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { username, password } = value;

  const sql = "SELECT password, ID FROM users WHERE username=?";

  pool.execute(sql, [username], (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    if (result.length > 0) {
      const userId = result[0].ID;
      const cryptoPassword = result[0].password;
      const isPasswordMatch = bcrypt.compareSync(password, cryptoPassword);

      if (isPasswordMatch) {
 /*        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
          expiresIn: "0.1h",
        }); */
        res.cookie("user_id", userId, {
          maxAge: 10 * 360000,
          sameSite: "none",
          secure: true,
          httpOnly: true,
        });
        res.status(200).send("login success!");
      } else {
        res.status(404).send("User not found, wrong username or password");
      }
    } else {
      res.status(404).send("User not found");
    }
  });
}
console.log(
  "🚀 ~ file: login.js:49 ~ login ~ process.env.JWT_SECRET:",
  process.env.JWT_SECRET
);
console.log(
  "🚀 ~ file: login.js:49 ~ login ~   process.env.JWT_SECRET:",
  process.env.JWT_SECRET
);

module.exports = { login };
