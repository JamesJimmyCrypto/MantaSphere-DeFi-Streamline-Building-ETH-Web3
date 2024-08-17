const express = require("express");
const {
  createTransaction,
  getTransactionById,
  getUserTransactions,
} = require("../controllers/transactionController");
const router = express.Router();

// Create a new transaction
router.post("/create", createTransaction);

// Get a transaction by ID
router.get("/:id", getTransactionById);

// Get all transactions for a user
router.get("/user/:userId", getUserTransactions);

module.exports = router;
