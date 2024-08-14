// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ContentNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor(
        address initialOwner
    ) ERC721("ContentNFT", "CNFT") Ownable(initialOwner) {}

    function mintNFT(
        address recipient,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        uint256 newItemId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit NFTMinted(recipient, newItemId, tokenURI);

        return newItemId;
    }

    event NFTMinted(
        address indexed recipient,
        uint256 indexed tokenId,
        string tokenURI
    );
}
