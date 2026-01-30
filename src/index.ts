import type { OpenInEntry as OpenInEntry } from './AbstractOpenInEntry.js';
import { EntryRegistry } from './EntryRegistry.js';
import type { EntryCategory, Network, PageType } from './types.js';
export type { OpenInEntry as OpenInEntry } from './AbstractOpenInEntry.js';
export * from './types.js';

export const getOpenInEntries = (
  network: Network,
  pageType: PageType,
  {
    excludeSiteNames,
    excludeCategories,
  }: { excludeSiteNames?: string[]; excludeCategories?: EntryCategory[] } = {},
): OpenInEntry[] =>
  EntryRegistry.filter(
    (r) =>
      r.supportsNetwork(network) &&
      r.supportsPageType(pageType) &&
      !excludeSiteNames?.includes(r.siteName) &&
      !excludeCategories?.includes(r.category),
  );
