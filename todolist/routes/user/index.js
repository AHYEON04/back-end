const express = require("express");
const router = express();
const controller = require("./controller");

router.post("/register",controller.register);


module.exports = router;