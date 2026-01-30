import { EntryCategory, Network, PageType } from '../types.js';
import { OpenInEntry } from '../AbstractOpenInEntry.js';

export class Pera extends OpenInEntry {
  siteName = 'Pera';

  category: EntryCategory = 'explorer';

  baseUrl = 'https://explorer.perawallet.app';

  baseUrlOverride: Map<Network, string> = new Map([
    ['testnet', 'https://testnet.explorer.perawallet.app'],
  ]);

  networks: Set<Network> = new Set(['mainnet', 'testnet']);

  pageTypeSuffixMap: Map<PageType, string> = new Map([
    ['block', '/block'],
    ['transaction', '/tx'],
    ['account', '/address'],
    ['asset', '/asset'],
    ['application', '/application'],
  ]);
}
