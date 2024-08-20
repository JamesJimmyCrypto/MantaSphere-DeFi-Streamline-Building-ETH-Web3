import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProposalDetail = () => {
  const { proposalId } = useParams();
  const [proposal, setProposal] = useState(null);
  const [vote, setVote] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const response = await axios.get(`/api/governance/${proposalId}`);
        setProposal(response.data);
      } catch (err) {
        setError("Failed to load proposal. Please try again.");
        console.error(err);
      }
    };

    fetchProposal();
  }, [proposalId]);

  const handleVote = async (voteType) => {
    try {
      await axios.post(`/api/governance/vote/${proposalId}`, {
        vote: voteType,
      });
      setVote(voteType);
      setSuccessMessage(`Your vote has been cast as '${voteType}'`);
    } catch (err) {
      setError("Failed to submit vote. Please try again.");
      console.error(err);
    }
  };

  if (!proposal) {
    return <p>Loading proposal details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{proposal.title}</h1>
      <p className="mb-4">{proposal.description}</p>
      <div className="flex items-center space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => handleVote("for")}
          disabled={vote === "for"}
        >
          Vote For
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => handleVote("against")}
          disabled={vote === "against"}
        >
          Vote Against
        </button>
      </div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-6">
        <p>Votes For: {proposal.votesFor}</p>
        <p>Votes Against: {proposal.votesAgainst}</p>
      </div>
    </div>
  );
};

export default ProposalDetail;
