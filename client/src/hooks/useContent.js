import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ContentNFT from "../artifacts/contracts/ContentNFT.sol/ContentNFT.json";

export const useContent = () => {
  const { account, library } = useWeb3React();
  const [contentItems, setContentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (account) {
      fetchContent();
    }
  }, [account]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/content");
      setContentItems(response.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
    }
  };

  const createContent = async (title, description, fileUrl) => {
    if (!account || !library) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const signer = library.getSigner(account);
      const contentNFTContract = new ethers.Contract(
        process.env.REACT_APP_CONTENT_NFT_ADDRESS,
        ContentNFT.abi,
        signer
      );

      const tx = await contentNFTContract.mintNFT(account, fileUrl);
      await tx.wait();

      const newContent = {
        title,
        description,
        fileUrl,
        creator: account,
        transactionHash: tx.hash,
      };

      await axios.post("/api/content/create", newContent);
      await fetchContent(); // Refresh content list after creation
    } catch (error) {
      setError(error);
      console.error("Error creating content:", error);
      throw error;
    }
  };

  return {
    contentItems,
    loading,
    error,
    fetchContent,
    createContent,
  };
};
