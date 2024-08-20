// ../utils/connectors.js
import { InjectedConnector } from "@web3-react/injected-connector";

// Define supported networks by their chain IDs
const supportedChainIds = [3441006]; // 1: Mainnet, 3: Ropsten, 4: Rinkeby, 5: Goerli, 42: Kovan

// Create an instance of InjectedConnector with supported networks
export const injected = new InjectedConnector({
  supportedChainIds,
});
