// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Governance {
    mapping(address => mapping(uint256 => bool)) private voters; // Tracks votes per proposal
    mapping(uint256 => Proposal) private proposals;
    uint256 private proposalCount;

    struct Proposal {
        string description;
        uint256 voteCount;
    }

    event ProposalCreated(uint256 indexed proposalId, string description);
    event Voted(uint256 indexed proposalId, address indexed voter);

    function createProposal(string memory description) public {
        proposals[proposalCount] = Proposal(description, 0);
        emit ProposalCreated(proposalCount, description);
        proposalCount++;
    }

    function vote(uint256 proposalId) public {
        require(proposalId < proposalCount, "Invalid proposal ID");
        require(
            !voters[msg.sender][proposalId],
            "You have already voted on this proposal."
        );

        proposals[proposalId].voteCount++;
        voters[msg.sender][proposalId] = true;

        emit Voted(proposalId, msg.sender);
    }

    function getProposal(
        uint256 proposalId
    ) public view returns (string memory description, uint256 voteCount) {
        require(proposalId < proposalCount, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];
        return (proposal.description, proposal.voteCount);
    }

    function getProposalCount() public view returns (uint256) {
        return proposalCount;
    }
}
