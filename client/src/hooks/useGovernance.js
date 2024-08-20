import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Governance from "../artifacts/contracts/Governance.sol/Governance.json";

export const useGovernance = () => {
  const { account, library } = useWeb3React();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (account) {
      fetchProposals();
    }
  }, [account]);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/governance");
      setProposals(response.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };

  const createProposal = async (description) => {
    if (!account || !library) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const signer = library.getSigner(account);
      const governanceContract = new ethers.Contract(
        process.env.REACT_APP_GOVERNANCE_ADDRESS,
        Governance.abi,
        signer
      );

      const tx = await governanceContract.createProposal(description);
      await tx.wait();

      const newProposal = {
        description,
        creator: account,
        transactionHash: tx.hash,
      };

      await axios.post("/api/governance/create", newProposal);
      await fetchProposals(); // Refresh proposal list after creation
    } catch (error) {
      setError(error);
      console.error("Error creating proposal:", error);
      throw error;
    }
  };

  const voteOnProposal = async (proposalId, vote) => {
    if (!account || !library) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const signer = library.getSigner(account);
      const governanceContract = new ethers.Contract(
        process.env.REACT_APP_GOVERNANCE_ADDRESS,
        Governance.abi,
        signer
      );

      const tx = await governanceContract.vote(proposalId);
      await tx.wait();

      await axios.post(`/api/governance/vote/${proposalId}`, { vote });
      await fetchProposals(); // Refresh proposal list after voting
    } catch (error) {
      setError(error);
      console.error("Error voting on proposal:", error);
      throw error;
    }
  };

  return {
    proposals,
    loading,
    error,
    fetchProposals,
    createProposal,
    voteOnProposal,
  };
};
