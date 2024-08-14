// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
    struct Listing {
        address seller;
        uint256 price;
        bool active;
    }

    IERC721 private nftContract;
    mapping(uint256 => Listing) private listings;

    event ListingCreated(
        uint256 indexed tokenId,
        address seller,
        uint256 price
    );
    event TokenPurchased(uint256 indexed tokenId, address buyer, uint256 price);

    constructor(address _nftContract) {
        nftContract = IERC721(_nftContract);
    }

    function createListing(uint256 tokenId, uint256 price) public {
        require(
            nftContract.ownerOf(tokenId) == msg.sender,
            "You do not own this token"
        );
        require(price > 0, "Price must be greater than zero");

        listings[tokenId] = Listing(msg.sender, price, true);
        emit ListingCreated(tokenId, msg.sender, price);
    }

    function buy(uint256 tokenId) public payable nonReentrant {
        Listing storage listing = listings[tokenId];
        require(listing.active, "Listing is not active");
        require(msg.value >= listing.price, "Insufficient funds");

        listing.active = false;
        payable(listing.seller).transfer(listing.price);
        nftContract.safeTransferFrom(listing.seller, msg.sender, tokenId);

        emit TokenPurchased(tokenId, msg.sender, listing.price);
    }

    function getListing(
        uint256 tokenId
    ) public view returns (address, uint256, bool) {
        Listing storage listing = listings[tokenId];
        return (listing.seller, listing.price, listing.active);
    }
}
