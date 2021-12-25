const router = require("express").Router();

const registerController = require("../controllers/registerController");

router.get("/", (req, res) => {
  res.send("Rota de registro");
});
router.post("/", registerController.postRegister);

module.exports = router;
