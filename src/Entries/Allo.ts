import { EntryCategory, Network, PageType } from '../types.js';
import { OpenInEntry } from '../AbstractOpenInEntry.js';

export class Allo extends OpenInEntry {
  siteName = 'Allo';

  category: EntryCategory = 'explorer';

  baseUrl = 'https://allo.info';

  networks: Set<Network> = new Set(['mainnet']);

  pageTypeSuffixMap: Map<PageType, string> = new Map([
    ['block', '/block'],
    ['transaction', '/tx'],
    ['account', '/address'],
    ['asset', '/asset/{id}/token'],
    ['application', '/application'],
  ]);
}
