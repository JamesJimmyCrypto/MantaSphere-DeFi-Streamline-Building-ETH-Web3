import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const TransactionList = () => {
  const { account } = useWeb3React();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (account) {
      fetchTransactions();
    }
  }, [account]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`/api/transactions/user/${account}`);
      setTransactions(response.data);
    } catch (err) {
      setError("Failed to load transactions. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transaction-list">
      <h2 className="text-2xl font-bold mb-4">My Transactions</h2>
      {loading ? (
        <p>Loading transactions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions.map((transaction) => (
            <div
              key={transaction._id}
              className="p-4 border rounded-lg shadow-md"
            >
              <p className="mb-2">
                <strong>From:</strong> {transaction.from}
              </p>
              <p className="mb-2">
                <strong>To:</strong> {transaction.to}
              </p>
              <p className="mb-2">
                <strong>Amount:</strong>{" "}
                {ethers.utils.formatEther(transaction.amount)} ETH
              </p>
              <p className="mb-2">
                <strong>Transaction Hash:</strong> {transaction.transactionHash}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Date:</strong>{" "}
                {new Date(transaction.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
