import { Network, PageType, EntryCategory } from '../types.js';
import { OpenInEntry } from '../AbstractOpenInEntry.js';

export class ASAStats extends OpenInEntry {
  siteName = 'ASA Stats';

  category: EntryCategory = 'analytics';

  baseUrl = 'https://www.asastats.com';

  networks: Set<Network> = new Set(['mainnet']);

  pageTypeSuffixMap: Map<PageType, string> = new Map([['account', '/']]);
}
