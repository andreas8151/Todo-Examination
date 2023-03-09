const pool = require("../../server");

function todoDone(req, res) {
  const userId = req.cookies.user_id;
  const { ID } = req.body;

  if (!userId) {
    res.status(400).send("Missing user ID cookie");
    return;
  }
  if (!ID) {
    res.status(400).send("Missing ID in request body");
    return;
  }

  const sql =
    "UPDATE todos SET completed = IF(completed = 0, 1, 0) WHERE ID = ?";

  pool.execute(sql, [ID], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    } else {
      const sql2 = "SELECT completed FROM todos WHERE ID = ?";

      pool.execute(sql2, [ID], (err, result) => {
        if (err) {
          res.status(500).json({ error: "Error in server: " + err });
          return;
        } else {
          const todoDoneValue = result[0].completed;
          res.status(200).send(todoDoneValue.toString());
        }
      });
    }
  });
}

module.exports = { todoDone };
