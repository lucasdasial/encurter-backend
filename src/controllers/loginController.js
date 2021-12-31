const db = require("../config/_database");

exports.postLogin = (req, res) => {
  const $login = req.body.login;
  const $pass = req.body.password;

  (async function login() {
    
    await db
      .query("SELECT * FROM tbl_users WHERE login = $1 AND pass = $2", [
        $login,
        $pass,
      ])
      .then((result) => {
        if (result.rowCount > 0) {
          res.send({
            authenticated: true,
            user: result.rows[0].login,
          });
        } else {
          res.send({ authenticated: false });
        }
      })
      .catch((err) => {
        res.send(err.message);
        console.log(err.message);
      });
  })();
};
