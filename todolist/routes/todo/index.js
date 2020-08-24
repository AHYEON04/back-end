const express = require("express");
const router = express();
const controller = require("./controller");
const tokenMiddleware = require("../../middlewares/token");

router.post("/", tokenMiddleware, controller.write);


module.exports = router;