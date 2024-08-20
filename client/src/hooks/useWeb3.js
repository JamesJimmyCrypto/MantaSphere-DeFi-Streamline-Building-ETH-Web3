import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [networkId, setNetworkId] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          const netId = await web3Instance.eth.net.getId();
          setNetworkId(netId);

          // Handle account changes
          window.ethereum.on("accountsChanged", (accounts) => {
            setAccount(accounts[0]);
          });

          // Handle network changes
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
        } catch (e) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        const netId = await web3Instance.eth.net.getId();
        setNetworkId(netId);
      } else {
        console.log("No Web3 provider found. Please install MetaMask!");
      }
    };

    initWeb3();
  }, []);

  return { web3, account, networkId };
};
