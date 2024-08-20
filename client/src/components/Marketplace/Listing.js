import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState } from "react";
import NFTContract from "../../artifacts/contracts/ContentNFT.sol/ContentNFT.json";
import MarketplaceContract from "../../artifacts/contracts/Marketplace.sol/Marketplace.json";
require("dotenv").config(); // Ensure dotenv is imported at the top

// Usage example
const { parseEther, formatEther } = ethers.utils;

const Listing = ({ listing }) => {
  const { account, library } = useWeb3React();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handlePurchase = async () => {
    if (!account) {
      setError("Please connect your wallet.");
      return;
    }

    try {
      const signer = library.getSigner(account);

      // Instantiate the Marketplace contract
      const marketplaceContract = new ethers.Contract(
        process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS,
        MarketplaceContract.abi,
        signer
      );

      // Call the buy function on the Marketplace contract
      const tx = await marketplaceContract.buy(listing.tokenId, {
        value: listing.price,
      });
      await tx.wait();

      setPurchaseSuccess(true);
      setError(null);
    } catch (err) {
      setError("Failed to complete the purchase. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Token ID: {listing.tokenId}</h2>
      <p className="text-gray-700 mb-2">
        Price: {ethers.utils.formatEther(listing.price)} ETH
      </p>
      <p className="text-gray-700 mb-2">Seller: {listing.seller}</p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {purchaseSuccess && (
        <p className="text-green-500 mb-4">
          Purchase successful! The NFT is now yours.
        </p>
      )}
      <button
        onClick={handlePurchase}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Listing;
