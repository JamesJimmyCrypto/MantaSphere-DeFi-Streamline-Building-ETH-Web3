import React, { useEffect, useState } from "react";
import VotingInterface from "../components/VotingInterface";

const Governance = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch("/api/governance")
      .then((res) => res.json())
      .then((data) => setProposals(data))
      .catch((err) => console.error(err));
  }, []);

  const voteFor = (proposalId) => {
    fetch(`/api/governance/vote/${proposalId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ support: true }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Voted for:", data))
      .catch((err) => console.error(err));
  };

  const voteAgainst = (proposalId) => {
    fetch(`/api/governance/vote/${proposalId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ support: false }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Voted against:", data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Governance</h1>
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
