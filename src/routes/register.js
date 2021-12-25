const router = require("express").Router();
const db = require("../config/_database");

router.get("/", (req, res) => {
  res.send("Rota de registro");
});
router.post("/", (req, res) => {
  const $login = req.body.login;
  const $pass = req.body.password;
  console.log($login);
  console.log(typeof $login);

  const query = "INSERT INTO tbl_users (login, pass) VALUES($1, $2)";
  const values = [$login, $pass];

  async function registerUser() {
    await db.query(query, values);
  }

  db.query("SELECT * FROM tbl_users WHERE login = $1", [$login])
    .then((result) => {
      if (result.rowCount < 1) {
        registerUser();
        res.send({ existingAccount: false });
      } else {
        res.send({ existingAccount: true });
      }
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
});

module.exports = router;
