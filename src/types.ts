/** Algorand Network */
export type Network = 'mainnet' | 'testnet' | 'betanet' | 'fnet' | 'localnet';

/** Page Type */
export type PageType = 'block' | 'transaction' | 'account' | 'asset' | 'application';

/** Category of the entry. */
export type EntryCategory = 'explorer' | 'analytics' | 'defi';

/** URL suffix for page type with optional {id} for identifier injection.
 * If no {id} is provider, the id will be appended like {pageTypeSuffix}/{id}.
 * Leading slashes ignored/automatically injected.
 */
export type PageTypeSuffixWithOptionalId = string;
