const express = require("express");
const { UserController } = require("../../controllers");

const router = express.Router();
// const { AirplaneMiddlewares } = require("../../middlewares");

// /api/v1/cities POST
router.post("/", UserController.create);

module.exports = router;
