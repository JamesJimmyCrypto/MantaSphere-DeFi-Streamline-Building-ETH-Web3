const Proposal = require("../models/Governance");

exports.createProposal = async (req, res) => {
  try {
    const { title, description } = req.body;
    const proposal = new Proposal({
      title,
      description,
      createdBy: req.user.id,
    });
    await proposal.save();
    res
      .status(201)
      .json({ message: "Proposal created successfully", proposal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.voteOnProposal = async (req, res) => {
  try {
    const { vote } = req.body; // 'for' or 'against'
    const proposal = await Proposal.findById(req.params.proposalId);
    if (!proposal)
      return res.status(404).json({ message: "Proposal not found" });

    if (vote === "for") proposal.votesFor += 1;
    else if (vote === "against") proposal.votesAgainst += 1;
    else return res.status(400).json({ message: "Invalid vote" });

    await proposal.save();
    res.status(200).json({ message: "Vote recorded successfully", proposal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find().populate("createdBy", "username");
    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
