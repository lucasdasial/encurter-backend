const router = require("express").Router();
const saveUrlController = require("../controllers/urlCrontroller");

router.post("/get", saveUrlController.getMyUrls);

router.post("/save", saveUrlController.postUrl);

router.post("/delete", saveUrlController.deleteUrl);

module.exports = router;
