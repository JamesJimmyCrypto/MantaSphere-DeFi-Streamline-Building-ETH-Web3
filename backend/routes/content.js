const express = require("express");
const {
  createContent,
  getAllContent,
  getContentById,
} = require("../controllers/contentController");
const router = express.Router();

// Create new content
router.post("/create", createContent);

// Get all content
router.get("/", getAllContent);

// Get content by ID
router.get("/:id", getContentById);

module.exports = router;
