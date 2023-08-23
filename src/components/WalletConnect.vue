<template>
  <div>
    <button @click="connectWallet">Connect Wallet / Open web3modal</button>
    <button @click="disconnectWallet">Disconnect Wallet</button>
    <p>Connected to: {{ accountAddress }}</p>

    <p>Current Chain ID: {{ chainId }}</p>
    <p>Current Chain Name: {{ chainId ? currentChainName : null }}</p>
  </div>
</template>

<script>
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
  configureChains,
  createConfig,
  watchNetwork,
  watchAccount,
} from "@wagmi/core";
import { mainnet, polygon } from "@wagmi/core/chains";

import { getNetworkName } from "../utils";

const chains = [mainnet, polygon];
const projectId = process.env.VUE_APP_WALLETCONNECT_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);

export default {
  data() {
    return {
      accountAddress: null,
      chainId: null,
    };
  },
  mounted() {
    watchNetwork((network) => {
      console.log("ChainId: ", network?.chain?.id);
      this.chainId = network?.chain?.id;
    });
    watchAccount((account) => {
      console.log("Account: ", account);
      this.accountAddress = account.address;
    });
  },
  computed: {
    currentChainName() {
      return getNetworkName(this.chainId);
    },
  },
  methods: {
    async connectWallet() {
      await web3modal.openModal();
      console.log("web3modal: opened");
    },
    async disconnectWallet() {
      // do not use this method in production
      await ethereumClient.disconnect();
      console.log("web3modal: disconnected");
    },
    
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
