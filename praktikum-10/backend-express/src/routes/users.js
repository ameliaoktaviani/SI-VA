const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { getUsers, deleteUser } = require("../controllers/UserController");

router.get("/", auth, getUsers);
router.delete("/:id", auth, deleteUser);

module.exports = router;
