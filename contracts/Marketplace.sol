// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {
    struct Sale {
        uint256 tokenId;
        address nftContract;
        address seller;
        uint256 price;
    }

    mapping(uint256 => Sale) public sales;
    uint256 public nextSaleId;

    function listItem(
        uint256 tokenId,
        address nftContract,
        uint256 price
    ) public {
        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the token owner");
        require(price > 0, "Price must be greater than zero");

        nft.transferFrom(msg.sender, address(this), tokenId);

        sales[nextSaleId] = Sale({
            tokenId: tokenId,
            nftContract: nftContract,
            seller: msg.sender,
            price: price
        });

        nextSaleId++;
    }

    function buyItem(uint256 saleId) public payable {
        Sale storage sale = sales[saleId];
        require(msg.value == sale.price, "Incorrect price");

        IERC721(sale.nftContract).transferFrom(
            address(this),
            msg.sender,
            sale.tokenId
        );
        payable(sale.seller).transfer(sale.price);
    }
}
