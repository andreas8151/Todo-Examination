const pool = require("../../server");

function deleteTodo(req, res) {
  const { ID } = req.body;

  if (!ID) {
    res.status(400).send("Missing ID in request body");
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
