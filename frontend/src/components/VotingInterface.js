import React from "react";

const VotingInterface = ({ proposal, voteFor, voteAgainst }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold">{proposal.description}</h3>
      <div className="mt-4">
        <button
          onClick={() => voteFor(proposal._id)}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Vote For
        </button>
        <button
          onClick={() => voteAgainst(proposal._id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Vote Against
        </button>
      </div>
    </div>
  );
};

export default VotingInterface;
