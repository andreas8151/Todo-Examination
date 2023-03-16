const pool = require("../../server");

function deleteTodo(req, res) {
  const { ID } = req.body;

  if (!ID) {
    res.status(400).send("Missing ID");
    return;
  }

  const checkSql = "SELECT * FROM todos WHERE ID = ?";
  
  pool.execute(checkSql, [ID], (checkErr, checkResult) => {
    if (checkErr) {
      res.status(500).json({ error: "Error in server: " + checkErr });
      return;
    }

    if (checkResult.length === 0) {
      res.status(404).send("Todo not found");
      return;
    }

    const deleteSql = "DELETE FROM todos WHERE ID = ?";
    pool.execute(deleteSql, [ID], (deleteErr, deleteResult) => {
      if (deleteErr) {
        res.status(500).json({ error: "Error in server: " + deleteErr });
        return;
      } else {
        res.status(204).send("Deleted Successfully");
      }
    });
  });
}

module.exports = { deleteTodo };
