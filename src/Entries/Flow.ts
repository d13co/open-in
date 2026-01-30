import { OpenInEntry } from '../AbstractOpenInEntry.js';
import { EntryCategory, Network, PageType } from '../types.js';

export class Flow extends OpenInEntry {
  siteName = 'Flow Algo Surf';

  category: EntryCategory = 'analytics';

  baseUrl = 'https://flow.algo.surf';

  baseUrlOverride: Map<Network, string> = new Map([['testnet', 'https://testflow.algo.surf']]);

  networks: Set<Network> = new Set(['mainnet', 'testnet']);

  pageTypeSuffixMap: Map<PageType, string> = new Map([['account', '/address']]);
}
