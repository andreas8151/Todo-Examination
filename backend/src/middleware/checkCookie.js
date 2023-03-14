function checkCookie(req, res, next) {
  const userId = req.cookies.user_id;

  if (!userId) {
    res.status(400).send("Missing user ID cookie");
    return;
  }
  next();
}

module.exports = { checkCookie };
