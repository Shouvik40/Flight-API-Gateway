const express = require("express");
const { UserController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middlewares");

const router = express.Router();
// const { AirplaneMiddlewares } = require("../../middlewares");

// /api/v1/user/signup POST
router.post("/signup", AuthRequestMiddlewares.validateAuthRequest, UserController.signup);
router.post("/signin", AuthRequestMiddlewares.validateAuthRequest, UserController.signin);

module.exports = router;
