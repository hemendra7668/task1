const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUser } = require("./controls/usercontrols");
const auth = require("./auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:userId", auth, getUser); // Protected

module.exports = router;
