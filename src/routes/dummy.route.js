const express = require("express");

const { registerController } = require("../controllers/auth.controller");

const{ registerValidator } = require("../middlewares/validator.middleware");

const router = express.Router();

router.post("/register", registerValidator, registerController);

module.exports = router;
