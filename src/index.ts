// First, import the necessary types from the WebExtensions API
import { browser, Tabs } from "webextension-polyfill-ts"; // Importing from webextension-polyfill-ts for TypeScript support

// Then, define an async function to fetch all open tabs
async function getAllOpenTabs(): Promise<Tabs.Tab[]> {
  try {
    // Use browser.tabs.query to get all tabs
    const tabs = await browser.tabs.query({});
    return tabs;
  } catch (error) {
    console.error("Error retrieving tabs:", error);
    return [];
  }
}

// Example usage:
(async () => {
  const openTabs = await getAllOpenTabs();
  console.log(openTabs);
})();
