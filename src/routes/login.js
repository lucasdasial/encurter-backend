const router = require("express").Router();
const db = require("../config/_database");

router.get("/", (req, res) => {
  res.send("rota de login");
});

module.exports = router;
