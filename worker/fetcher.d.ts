/** Minimal asset-binding type so Worker code typechecks without the full workerd runtime dump. */
interface Fetcher {
  fetch(input: Request | string, init?: RequestInit): Promise<Response>;
}
