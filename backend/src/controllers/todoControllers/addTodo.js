const pool = require("../../server");
const { validateAddTodo } = require("./validation/todoAddValidation");

function addTodo(req, res) {
  const { error, value } = validateAddTodo(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const userId = req.cookies.user_id;

  const { todoTitle, description } = value;

  const sql =
    "INSERT INTO todos (user_id, title, description) VALUES (?, ?, ?)";
  pool.execute(sql, [userId, todoTitle, description], (err, result) => {
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
