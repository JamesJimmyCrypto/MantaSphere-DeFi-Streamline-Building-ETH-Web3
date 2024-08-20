import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProposalList = () => {
  const [proposals, setProposals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await axios.get("/api/governance");
        setProposals(response.data);
      } catch (err) {
        setError("Failed to load proposals. Please try again.");
        console.error(err);
      }
    };

    fetchProposals();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (proposals.length === 0) {
    return <p>No proposals found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Proposals</h1>
      <ul className="space-y-4">
        {proposals.map((proposal) => (
          <li
            key={proposal._id}
            className="p-4 border rounded hover:bg-gray-100 transition"
          >
            <Link to={`/proposals/${proposal._id}`}>
              <h2 className="text-xl font-semibold">{proposal.title}</h2>
              <p className="text-gray-600">{proposal.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Votes For: {proposal.votesFor} | Votes Against:{" "}
                {proposal.votesAgainst}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProposalList;
