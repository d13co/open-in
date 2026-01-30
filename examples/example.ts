import { getOpenInEntries, Network, PageType } from '../src/index.js';

// Use 3 scenarios with different networks, different page types, and different IDs
const scenarios: [Network, PageType, string][] = [
  ['fnet', 'block', '1'],
  ['betanet', 'application', '1002'],
  ['localnet', 'asset', '1002'],
  ['testnet', 'transaction', 'QOOBRVQMX4HW5QZ2EGLQDQCQTKRF3UP3JKDGKYPCXMI6AVV35KQA'],
  ['mainnet', 'account', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ'],
];

for (const [network, pageType, id] of scenarios) {
  console.log(`### Entries for { PageType: ${pageType}, Network: ${network}, ID: ${id} }\n`);

  // Get entry objects for dApps supporting this combination of network+page type
  const sites = getOpenInEntries(network, pageType);

  for (const site of sites) {
    const url = site.getUrl(network, pageType, id);
    // Show site details and generated URL for $id
    console.log(`- Site Name: ${site.siteName}`);
    console.log(`    - Category: ${site.category}`);
    console.log(`    - URL: ${url}\n`);
  }
  console.log('\n');
}

/*
Exclude a category or specific site, e.g. if you are integrating in that site, or if it is not relevant to your use case.
This example will omit "Algo Surf" (by name) and "Flow Algo Surf" (analytics category)
*/

// const sites = getOpenInEntries('testnet', 'account', {
//   excludeCategories: ['analytics'],
//   excludeSiteNames: ['Algo Surf'],
// });
// console.log(sites.map((s) => s.siteName));
