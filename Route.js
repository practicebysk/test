const { test } = require("./controll");

const router = require("express").Router();
router.post("/test",test);


module.exports = router;