const router = require("express").Router();
const saveUrlController = require("../controllers/saveUrlCrontroller");

router.get("/", (req, res) => {
  res.send("rota de save");
});


router.post("/", saveUrlController.postUrl);

module.exports = router;
