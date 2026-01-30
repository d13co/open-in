import { EntryCategory, Network, PageType } from '../types.js';
import { OpenInEntry } from '../AbstractOpenInEntry.js';

export class Lora extends OpenInEntry {
  siteName = 'Lora';

  category: EntryCategory = 'explorer';

  baseUrl = 'https://lora.algokit.io/{network}';

  networks: Set<Network> = new Set(['mainnet', 'testnet', 'betanet', 'localnet', 'fnet']);

  pageTypeSuffixMap: Map<PageType, string> = new Map([
    ['block', '/block'],
    ['transaction', '/transaction'],
    ['account', '/account'],
    ['asset', '/asset'],
    ['application', '/application'],
  ]);
}
