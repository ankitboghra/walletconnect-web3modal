export function getNetworkName(networkId) {
  switch (networkId) {
    case 1:
      return "Mainnet";
    case 3:
      return "Ropsten";
    case 4:
      return "Rinkeby";
    case 5:
      return "Goerli";
    case 42:
      return "Kovan";
    case 137:
      return "Polygon";
    case 80001:
      return "Mumbai";
    case 1101:
      return "zkEVM";
    default:
      return "Unknown Chain";
  }
}
