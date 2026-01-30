import { getOpenInEntries } from '../src/index.js';

// Example: You want to offer "open-in" / navigation options for testnet asset 10010
// Which explorers/dApps support this?
// What is the correct URL for the network, pageType and id?
const sites = getOpenInEntries('testnet', 'asset');

for (const site of sites) {
  const url = site.getUrl('testnet', 'asset', '10010');
  console.log(`Site Name: "${site.siteName}"; URL: "${url}"`);
}

/*
Site Name: "Pera"; URL: "https://testnet.explorer.perawallet.app/asset/10010"
Site Name: "Lora"; URL: "https://lora.algokit.io/testnet/asset/10010"
Site Name: "Algo Surf"; URL: "https://testnet.algo.surf/asset/10010/transactions"
*/
