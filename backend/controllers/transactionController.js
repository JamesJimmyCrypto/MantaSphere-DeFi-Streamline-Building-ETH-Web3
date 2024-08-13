const Transaction = require("../models/Transaction");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate("user", "username");
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTransaction = async (req, res) => {
  const { amount, type } = req.body;
  const userId = req.user.id;

  try {
    const transaction = new Transaction({
      amount,
      type,
      user: userId,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
