import { Network, PageTypeSuffixWithOptionalId, PageType, EntryCategory } from '../types.js';
import { OpenInEntry } from '../AbstractOpenInEntry.js';

export class AlgoSurf extends OpenInEntry {
  siteName = 'Algo Surf';

  category: EntryCategory = 'explorer';

  // used for everything except mainnet
  baseUrl = 'https://{network}.algo.surf';

  // mainnet special rule
  baseUrlOverride: Map<Network, string> = new Map([['mainnet', 'https://algo.surf']]);

  networks: Set<Network> = new Set(['mainnet', 'testnet', 'betanet', 'localnet', 'fnet']);

  pageTypeSuffixMap: Map<PageType, PageTypeSuffixWithOptionalId> = new Map([
    ['transaction', '/transaction'],
    ['account', '/account'],
    ['block', '/block/{id}/transactions'],
    ['asset', '/asset/{id}/transactions'],
    ['application', '/application/{id}/transactions'],
  ]);
}
