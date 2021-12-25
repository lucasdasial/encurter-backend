const router = require("express").Router();
const loginController = require("../controllers/loginController");

router.get("/", (req, res) => {
  res.send("rota de login");
});
router.post("/", loginController.postLogin);

module.exports = router;
