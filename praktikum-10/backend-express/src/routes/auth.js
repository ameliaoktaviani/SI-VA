const express = require("express");
const router = express.Router();

const register = require("../controllers/RegisterController");
const login = require("../controllers/LoginController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
