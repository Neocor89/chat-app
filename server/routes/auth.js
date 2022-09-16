const express = require("express");

const { login, signup } = require("../controllers/auth");

const router = express.Router();

router.post("/signup");
router.post("/login");

module.exports = router;
