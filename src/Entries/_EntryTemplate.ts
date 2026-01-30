// Entry Template for Algorand Open In
// -----------------------------------
// Use this template to submit your own explorer or dApp entry.
//
// How to use:
// 1. Rename the class and file to match your entry (e.g., MyDappEntry.ts).
// 2. Fill in the required fields and customize the logic as needed.
// 3. Add comments to explain any special rules or behaviors.
// 4. IMPORTANT! Add it to src/EntryRegistry.ts so it gets included in the build.
// 5. Submit a pull request with your new entry!

import { Network, PageTypeSuffixWithOptionalId, PageType, EntryCategory } from '../types.js';
import { OpenInEntry } from '../AbstractOpenInEntry.js';

// Replace 'YourEntryName' with the name of your site or dApp
export class YourEntryName extends OpenInEntry {
  // The display name of your site or dApp
  siteName = 'Your Site Name';

  // The category of your entry (e.g., 'explorer', 'analytics', 'dapp')
  category: EntryCategory = 'explorer';

  // The base URL for your site. Use {network} as a placeholder if your site supports multiple networks.
  // e.g. will result in https://testnet.your-site.com for testnet
  baseUrl = 'https://{network}.your-site.com';

  // (Optional) Override the base URL for specific networks (e.g., mainnet)
  // You can delete this if you only have a single network deployment
  baseUrlOverride: Map<Network, string> = new Map([
    // ['mainnet', 'https://your-site.com']
  ]);

  // Supported networks
  networks: Set<Network> = new Set(['mainnet', 'testnet', 'betanet', 'localnet', 'fnet']);

  // Map page types to their URL suffixes. Use {id} as a placeholder for resource IDs.
  pageTypeSuffixMap: Map<PageType, PageTypeSuffixWithOptionalId> = new Map([
    // ['transaction', '/transaction'],
    // ['account', '/account'],
    // ['block', '/block/{id}/transactions'],
    // ['asset', '/asset/{id}/transactions'],
    // ['application', '/application/{id}/transactions'],
  ]);
}
