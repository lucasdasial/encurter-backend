const router = require("express").Router();
const saveUrlController = require("../controllers/saveUrlCrontroller");

router.post("/get", saveUrlController.getMyUrls);


router.post("/save", saveUrlController.postUrl);

module.exports = router;
