import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { ethers } from "ethers";
import React, { useState } from "react";
import NFTContract from "../../artifacts/contracts/ContentNFT.sol/ContentNFT.json";
import MarketplaceContract from "../../artifacts/contracts/Marketplace.sol/Marketplace.json";
require("dotenv").config();

const CreateListing = () => {
  const { account, library } = useWeb3React();
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");
  const [listingCreated, setListingCreated] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateListing = async () => {
    if (!account) {
      setError("Please connect your wallet.");
      return;
    }

    try {
      const signer = library.getSigner(account);

      // Instantiate the NFT contract
      const nftContract = new ethers.Contract(
        process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        NFTContract.abi,
        signer
      );

      // Instantiate the Marketplace contract
      const marketplaceContract = new ethers.Contract(
        process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS,
        MarketplaceContract.abi,
        signer
      );

      // Approve the Marketplace to transfer the NFT on behalf of the owner
      const approveTx = await nftContract.approve(
        process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS,
        tokenId
      );
      await approveTx.wait();

      // Create the listing on the Marketplace
      const priceInWei = ethers.utils.parseUnits(price, "ether");
      const tx = await marketplaceContract.createListing(tokenId, priceInWei);
      await tx.wait();

      setListingCreated(true);
      setError(null);
    } catch (err) {
      setError("Failed to create listing. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Listing</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Token ID</label>
        <input
          type="text"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter the Token ID"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price (ETH)</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter the price in ETH"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {listingCreated && (
        <p className="text-green-500 mb-4">Listing created successfully!</p>
      )}
      <button
        onClick={handleCreateListing}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Create Listing
      </button>
    </div>
  );
};

export default CreateListing;
