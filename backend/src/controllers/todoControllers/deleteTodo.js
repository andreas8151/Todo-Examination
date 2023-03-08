const pool = require("../../server");

function deleteTodo(req, res) {
  const userId = req.cookies.user_id;
  const { ID } = req.body;

  if (!userId) {
    res.status(400).send("Missing user ID cookie");
    return;
  }

  const sql = "DELETE FROM todos WHERE ID = ?";
  pool.execute(sql, [ID], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    } else {
      res.status(204).send("Deleted Successfully");
    }
  });
}

module.exports = { deleteTodo };
