const express = require("express");
const { UserController } = require("../../controllers");

const router = express.Router();
// const { AirplaneMiddlewares } = require("../../middlewares");

// /api/v1/user/signup POST
router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);

module.exports = router;
