import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const useTransactions = () => {
  const { account, library } = useWeb3React();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (account) {
      fetchTransactions();
    }
  }, [account]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/transactions/${account}`);
      setTransactions(response.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendTransaction = async (recipient, amount) => {
    if (!account || !library) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const signer = library.getSigner(account);
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseUnits(amount.toString(), "ether"),
      });

      await tx.wait();

      const newTransaction = {
        from: account,
        to: recipient,
        amount: amount.toString(),
        transactionHash: tx.hash,
        timestamp: Date.now(),
      };

      await axios.post("/api/transactions", newTransaction);
      await fetchTransactions(); // Refresh transactions after sending
    } catch (error) {
      setError(error);
      console.error("Error sending transaction:", error);
      throw error;
    }
  };

  return {
    transactions,
    loading,
    error,
    fetchTransactions,
    sendTransaction,
  };
};
