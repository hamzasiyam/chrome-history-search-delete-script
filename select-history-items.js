// =============================================================================
// Chrome History - Select All & Delete by Keyword
// Usage: 1) Search for a keyword on chrome://history
//        2) Paste this into the Console (F12) and press Enter
//        3) Click Delete on the history page
// =============================================================================

console.log('Starting... Finding history elements.');

// Find the history-app element in the document. history-app is the root container
// for Chrome's history page; the rest of the UI is inside its Shadow DOM.
const historyApp = document.querySelector('history-app');
console.log('Found history-app.');

// Get the Shadow DOM root of history-app. shadowRoot gives access to the
// encapsulated DOM tree attached to this element.
const appShadow = historyApp.shadowRoot;

// Find the history-list element inside the app's Shadow DOM. history-list
// contains all the history-item elements (each one is a visited URL).
const historyList = appShadow.querySelector('history-list');
console.log('Found history-list.');

// Get the Shadow DOM root of history-list so we can query inside it.
const listShadow = historyList.shadowRoot;

// Get every history-item element. Each represents one browsing history entry.
// querySelectorAll returns a NodeList of all matching elements.
const items = listShadow.querySelectorAll('history-item');
console.log('Found ' + items.length + ' history items. Selecting...');

// forEach runs the function once for each item in the NodeList.
let selectedCount = 0;
items.forEach((item, index) => {
  // Get this history-item's Shadow DOM so we can find its checkbox.
  const itemShadow = item.shadowRoot;
  // Find the cr-checkbox element. cr-checkbox is Chrome's checkbox component;
  // clicking it selects or deselects this history entry.
  const checkbox = itemShadow.querySelector('cr-checkbox');
  // If the checkbox exists and is not already checked, call click() to select it.
  if (checkbox && !checkbox.checked) {
    checkbox.click();
    selectedCount++;
  }
  if ((index + 1) % 10 === 0 || index === items.length - 1) {
    console.log('Processed ' + (index + 1) + ' of ' + items.length);
  }
});

console.log('Done! Selected ' + selectedCount + ' items. Click Delete to remove them.');
