const pool = require("../../server");
const { validateAddTodo } = require("./validation/todoAddValidation");

function addTodo(req, res) {
  const { error, value } = validateAddTodo(req.body);
  const userId = req.cookies.user_id;

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  if (!userId) {
    res.status(400).send("Missing user ID cookie");
    return;
  }

  const { title, description } = value;

  const sql =
    "INSERT INTO todos (user_id, title, description) VALUES (?, ?, ?)";
  pool.execute(sql, [userId, title, description], (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    if (result.affectedRows > 0) {
      res.send("Success");
    } else {
      //cookie gått ut??????????
    }
  });
}

module.exports = { addTodo };
