const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  proposer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  votesFor: {
    type: Number,
    default: 0,
  },
  votesAgainst: {
    type: Number,
    default: 0,
  },
  executed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Proposal", ProposalSchema);
