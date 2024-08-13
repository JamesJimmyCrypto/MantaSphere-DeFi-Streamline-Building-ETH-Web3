const express = require("express");
const {
  getTransactions,
  createTransaction,
} = require("../controllers/transactionController");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, getTransactions);
router.post("/", auth, createTransaction);

module.exports = router;
