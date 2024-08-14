const express = require("express");
const { register, login, getUser } = require("../controllers/authController");
const router = express.Router();

// User registration
router.post("/register", register);

// User login
router.post("/login", login);

// Get user data
router.get("/user", getUser);

module.exports = router;
