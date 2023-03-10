const pool = require("../../server");
function getFriends(req, res) {
  const userId = req.cookies.user_id;

  const friendSql =
    "SELECT u.username FROM users u JOIN friends f ON f.friend_id = u.ID WHERE f.user_id = ?";

  pool.execute(friendSql, [userId], (err, friendResult) => {
    if (err) {
      res.status(500).send("Error, can not get friends");
      return;
    }
    if (friendResult.length === 0) {
      res.status(400).send("you have no friends");
      return;
    }
    res.status(200).send(friendResult);
  });
}

module.exports = { getFriends };
