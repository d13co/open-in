import { Network, PageTypeSuffixWithOptionalId, PageType, EntryCategory } from './types.js';

export abstract class OpenInEntry {
  /** Site name to display */
  abstract siteName: string;

  /** Entry category */
  abstract category: EntryCategory;

  /**
   * Base domain.
   * Can include {network} template, which will be replaced with the lowercase network name (e.g., "mainnet", "testnet").
   */
  abstract baseUrl: string;

  /** Map of network-specific base URL overrides
   * You can use this to set explicit base URLs for specific networks
   */
  baseUrlOverride: Map<Network, string> = new Map();

  /** Supported networks */
  abstract networks: Set<Network>;

  /**
   * Map of supported page types to URL path.
   * The suffix can include an {id} placeholder for the entity identifier.
   * Otherwise, the id will be appended to the suffix.
   */
  abstract pageTypeSuffixMap: Map<PageType, PageTypeSuffixWithOptionalId>;

  /** Construct the full URL for a given network, page type and id */
  getUrl(network: Network, pageType: PageType, id: string): string | null {
    if (!this.supportsPageType(pageType) || !this.supportsNetwork(network)) {
      return null;
    }
    let baseUrl = this.getBaseUrl(network);
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    let suffix = this.pageTypeSuffixMap.get(pageType)!; // checked by supportsPageType
    // support arbitrary slash prefix/suffix here
    if (suffix.startsWith('/')) {
      suffix = suffix.slice(1);
    }
    if (suffix.endsWith('/')) {
      suffix = suffix.slice(0, -1);
    }
    if (suffix.includes('{id}')) {
      suffix = `${suffix.replace('{id}', id)}`;
    } else {
      suffix = `${suffix}/${id}`;
    }
    return `${baseUrl}/${suffix}`;
  }

  /** Check if the network is supported */
  supportsNetwork(network: Network): boolean {
    return this.networks.has(network);
  }

  /** Check if the page type is supported (type guard) */
  supportsPageType(pageType: PageType): pageType is PageType {
    return this.pageTypeSuffixMap.has(pageType);
  }

  /** Get the base URL for a given network */
  getBaseUrl(network: Network): string {
    if (this.baseUrlOverride.has(network)) {
      return this.baseUrlOverride.get(network)!;
    }
    return this.baseUrl.replace('{network}', network.toLowerCase());
  }
}
