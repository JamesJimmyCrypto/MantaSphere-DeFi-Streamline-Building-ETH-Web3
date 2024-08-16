const express = require("express");
const {
  createProposal,
  voteOnProposal,
  getProposals,
} = require("../controllers/governanceController");
const router = express.Router();

// Create a new proposal
router.post("/create", createProposal);

// Vote on a proposal
router.post("/vote/:proposalId", voteOnProposal);

// Get all proposals
router.get("/", getProposals);

module.exports = router;
