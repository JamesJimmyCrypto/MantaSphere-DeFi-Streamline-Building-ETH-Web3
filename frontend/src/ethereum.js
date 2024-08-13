import { ethers } from "ethers";

const getEthereumObject = () => {
  const { ethereum } = window;
  if (!ethereum) {
    alert("Make sure you have MetaMask installed!");
    return null;
  }
  return ethereum;
};

const connectWallet = async () => {
  try {
    const ethereum = getEthereumObject();
    if (!ethereum) return;

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected:", accounts[0]);
    return accounts[0];
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
};

const getProviderAndSigner = () => {
  const ethereum = getEthereumObject();
  if (!ethereum) return null;

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return { provider, signer };
};

export { connectWallet, getProviderAndSigner };
