const pool = require("../../server");

function getUsersTodos(req, res) {
  const userId = req.cookies.user_id;

  const sql = "SELECT * FROM todos WHERE user_id = ?";
  pool.execute(sql, [userId], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    } else {
      res.status(200).json(result);
    }
  });
}

module.exports = { getUsersTodos };
