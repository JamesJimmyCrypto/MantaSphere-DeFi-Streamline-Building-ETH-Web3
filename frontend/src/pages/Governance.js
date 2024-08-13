import React, { useEffect, useState } from "react";
import VotingInterface from "../components/VotingInterface";

const Governance = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch("/api/governance")
      .then((res) => res.json())
      .then((data) => setProposals(data));
  }, []);

  const voteFor = async (proposalId) => {
    await fetch(`/api/governance/vote-for/${proposalId}`, { method: "POST" });
    // Handle updating the UI after voting
  };

  const voteAgainst = async (proposalId) => {
    await fetch(`/api/governance/vote-against/${proposalId}`, {
      method: "POST",
    });
    // Handle updating the UI after voting
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Governance</h1>
      {proposals.map((proposal) => (
        <VotingInterface
          key={proposal._id}
          proposal={proposal}
          voteFor={voteFor}
          voteAgainst={voteAgainst}
        />
      ))}
    </div>
  );
};

export default Governance;
