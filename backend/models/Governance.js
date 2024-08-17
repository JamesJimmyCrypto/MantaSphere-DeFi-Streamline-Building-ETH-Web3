const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    votesFor: { type: Number, default: 0 },
    votesAgainst: { type: Number, default: 0 },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Proposal", ProposalSchema);
