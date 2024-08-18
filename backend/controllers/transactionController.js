const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
  try {
    const { from, to, amount, transactionHash } = req.body;
    const transaction = new Transaction({ from, to, amount, transactionHash });
    await transaction.save();
    res
      .status(201)
      .json({ message: "Transaction recorded successfully", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate(
      "from to",
      "username"
    );
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      from: req.params.userId,
    }).populate("from to", "username");
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
