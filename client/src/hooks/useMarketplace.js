import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Marketplace from "../artifacts/contracts/Marketplace.sol/Marketplace.json";

export const useMarketplace = () => {
  const { account, library } = useWeb3React();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (account) {
      fetchListings();
    }
  }, [account]);

  const fetchListings = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/marketplace");
      setListings(response.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  const createListing = async (itemId, price) => {
    if (!account || !library) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const signer = library.getSigner(account);
      const marketplaceContract = new ethers.Contract(
        process.env.REACT_APP_MARKETPLACE_ADDRESS,
        Marketplace.abi,
        signer
      );

      const priceInWei = ethers.utils.parseUnits(price.toString(), "ether");

      const tx = await marketplaceContract.createListing(itemId, priceInWei);
      await tx.wait();

      const newListing = {
        itemId,
        price: priceInWei.toString(),
        seller: account,
        transactionHash: tx.hash,
      };

      await axios.post("/api/marketplace/create", newListing);
      await fetchListings(); // Refresh listings after creation
    } catch (error) {
      setError(error);
      console.error("Error creating listing:", error);
      throw error;
    }
  };

  const purchaseItem = async (listingId, price) => {
    if (!account || !library) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const signer = library.getSigner(account);
      const marketplaceContract = new ethers.Contract(
        process.env.REACT_APP_MARKETPLACE_ADDRESS,
        Marketplace.abi,
        signer
      );

      const tx = await marketplaceContract.purchaseItem(listingId, {
        value: ethers.utils.parseUnits(price.toString(), "ether"),
      });
      await tx.wait();

      await axios.post(`/api/marketplace/purchase/${listingId}`, {
        buyer: account,
        transactionHash: tx.hash,
      });
      await fetchListings(); // Refresh listings after purchase
    } catch (error) {
      setError(error);
      console.error("Error purchasing item:", error);
      throw error;
    }
  };

  return {
    listings,
    loading,
    error,
    fetchListings,
    createListing,
    purchaseItem,
  };
};
