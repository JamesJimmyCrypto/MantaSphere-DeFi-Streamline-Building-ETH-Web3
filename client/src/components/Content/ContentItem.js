import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import Web3 from "web3";

const ContentItem = ({ content }) => {
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = async () => {
    try {
      setIsBuying(true);

      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        const buyerAddress = accounts[0];

        // Fetch the listing price
        const response = await axios.get(
          `/api/content/listing/${content.tokenId}`
        );
        const listingPrice = response.data.price;

        // Proceed with the purchase on the blockchain
        const transaction = await web3.eth.sendTransaction({
          from: buyerAddress,
          to: content.seller, // Seller's address
          value: web3.utils.toWei(listingPrice, "ether"), // Convert to wei
        });

        // Record the transaction in the backend
        await axios.post("/api/transactions/create", {
          from: buyerAddress,
          to: content.seller,
          amount: listingPrice,
          transactionHash: transaction.transactionHash,
        });

        alert("Purchase successful!");
      } else {
        alert("Please install MetaMask to proceed with the purchase.");
      }
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Purchase failed. Please try again.");
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={content.image}
        alt={content.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
        <p className="text-gray-700 mb-4">{content.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-gray-800 font-semibold">
            {content.price} <FaEthereum className="inline text-blue-600" />
          </div>
          <button
            onClick={handleBuy}
            disabled={isBuying}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {isBuying ? "Processing..." : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

ContentItem.propTypes = {
  content: PropTypes.shape({
    tokenId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired, // Price in ETH
    seller: PropTypes.string.isRequired, // Seller's address
  }).isRequired,
};

export default ContentItem;
