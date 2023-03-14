const pool = require("../../server");
const { validateAddTodo } = require("./validation/todoAddValidation");

function updateTodo(req, res) {
  const { error, value } = validateAddTodo(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { title, description } = value;
  const { ID } = req.body;

  const sql = "UPDATE todos SET title = ?, description = ? WHERE ID = ?";
  pool.execute(sql, [title, description, ID], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    } else {
      res.status(200).send("Update Successfully");
    }
  });
}

module.exports = { updateTodo };
