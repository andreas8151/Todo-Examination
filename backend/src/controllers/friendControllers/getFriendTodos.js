const pool = require("../../server");

function getFriendTodos(req, res) {
  const { friend } = req.query;

  if (!friend) {
    res.status(400).send("Friend parameter is required.");
    return;
  }

  const sql =
    "SELECT DISTINCT todos.* FROM todos JOIN friends ON todos.user_id = friends.friend_id JOIN users ON friends.friend_id = users.id WHERE users.username = ?";

  pool.execute(sql, [friend], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    } else {
      res.status(200).json(result);
    }
  });
}

module.exports = { getFriendTodos };
