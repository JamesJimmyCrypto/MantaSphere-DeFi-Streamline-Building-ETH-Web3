const express = require("express");
const {
  createContent,
  getContents,
} = require("../controllers/contentController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createContent);
router.get("/", getContents);

module.exports = router;
