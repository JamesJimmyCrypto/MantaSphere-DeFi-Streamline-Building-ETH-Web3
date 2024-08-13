const express = require("express");
const {
  createProposal,
  getProposals,
} = require("../controllers/governanceController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createProposal);
router.get("/", getProposals);

module.exports = router;
