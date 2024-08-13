const Proposal = require("../models/Proposal");

exports.createProposal = async (req, res) => {
  const { description } = req.body;
  const userId = req.user.id;

  try {
    const proposal = new Proposal({
      description,
      proposer: userId,
    });

    await proposal.save();
    res.status(201).json(proposal);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find().populate("proposer", "username");
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
