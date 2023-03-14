const pool = require("../../server");
function addFriend(req, res) {
  const { friend } = req.body;
  const userId = req.cookies.user_id;

  const friendSql = "SELECT id FROM users WHERE username = ?";
  pool.execute(friendSql, [friend], (err, friendResult) => {
    if (err) {
      res.status(500).send("Error, can not add");
      return;
    }
    if (friendResult.length === 0) {
      res.status(400).send("user not found");
      return;
    }
    const friendId = friendResult[0].id;
    const sql = "INSERT INTO friends (user_id, friend_id) VALUES (?, ?)";
    pool.execute(sql, [userId, friendId], (err, result) => {
      if (err) {
        res.status(500).send("Error, can not add");
        return;
      }
      if (result.affectedRows > 0) {
        res.status(201).send("Friend Added");
      }
    });
  });
}

module.exports = { addFriend };
