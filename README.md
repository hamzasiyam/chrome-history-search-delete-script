# Chrome History - Delete by Keyword

**What does this do?**  
The script selects every history item currently visible on the Chrome history page by programmatically clicking each item's checkbox. After it runs, you click the Delete button once to remove all selected items.

**When is it useful?**  
You search for a keyword in the history search box (e.g., `youtube.com` or `reddit`). Chrome filters the list to show only matching entries. The script selects all of those filtered entries at once so you can delete them in one action instead of selecting each one manually.

---

## Step-by-Step Usage

1. Open Chrome and type **`chrome://history`** in the address bar, then press Enter.

2. In the search box on that page, type the word or site you want to remove (e.g., `youtube.com`, `reddit`, or any term). Chrome will display only the history entries that match.

3. Press **F12** to open Chrome DevTools. A panel opens at the bottom or side of the window.

4. Click the **Console** tab in that panel. The Console is where you enter and run JavaScript.

5. Open the file `select-history-items.js`, select all the text, and copy it (Ctrl+C).

6. Click inside the Console, paste the code (Ctrl+V), and press **Enter**.

7. The script executes. Every history item on the page is now selected (its checkbox is checked).

8. Click the **Delete** button on the history page to remove the selected items.

---

## What the Script Does

1. It finds the `history-app` element in the page's DOM.
2. It accesses that element's Shadow DOM via `shadowRoot` to reach the elements inside it.
3. It finds the `history-list` element inside the app's Shadow DOM.
4. It accesses the list's Shadow DOM to reach the `history-item` elements.
5. It loops through each `history-item`, accesses each item's Shadow DOM, finds the `cr-checkbox` element, and calls `click()` on it if it is not already checked.
6. After the script finishes, all visible history items are selected. You then click Delete to remove them.

---

<details>
<summary><strong>Definitions</strong> (click to expand)</summary>

**DOM (Document Object Model)**  
The DOM is the structure of a webpage. When the browser loads HTML, it builds a tree of objects. Each object represents an element on the page (a heading, a paragraph, a button, etc.). JavaScript can read and modify these objects to change what the page shows or how it behaves.

**Shadow DOM**  
Shadow DOM is a web standard that lets you attach a separate DOM tree to an element. That tree is not part of the main document's DOM. It is encapsulated: its elements are not directly visible when you query the main document. Chrome's history page uses Shadow DOM for its UI components. To work with elements inside Shadow DOM, you must first get the element that hosts it, then use its `shadowRoot` property.

**shadowRoot**  
A property on an element. If that element has a Shadow DOM attached, `shadowRoot` returns the root node of that Shadow DOM tree. You use it to query and manipulate elements inside the Shadow DOM.

**querySelector(selector)**  
A method you call on `document` or on an element. You pass a CSS selector string (e.g., `'history-app'` or `'cr-checkbox'`). It returns the first descendant element that matches the selector, or `null` if none matches.

**querySelectorAll(selector)**  
Same as `querySelector`, but returns a NodeList of all matching descendant elements instead of just the first one.

**document**  
A global object in the browser. It represents the current webpage (the HTML document). You use it to access and modify the page's DOM.

**history-app**  
A custom element used on Chrome's history page. It is the root container for the history interface. The main DOM contains this element; the rest of the history UI lives inside its Shadow DOM.

**history-list**  
A custom element that holds the list of history entries. It is inside the Shadow DOM of `history-app`.

**history-item**  
A custom element. Each one represents a single browsing history entry (one URL you visited). Multiple `history-item` elements are inside the Shadow DOM of `history-list`.

**cr-checkbox**  
A custom checkbox element used by Chrome's internal UI. On the history page, each `history-item` contains a `cr-checkbox`. Clicking it selects or deselects that history entry. The script finds these elements and calls `click()` on them.

**Custom element**  
An HTML element with a custom tag name (e.g., `history-app`, `history-item`, `cr-checkbox`). These are defined using the Web Components API. Chrome uses them for its internal pages instead of standard HTML elements like `div` or `button`.

**forEach(callback)**  
A method on arrays and array-like objects (such as NodeList). You pass a function. That function runs once for each item in the collection, with the current item passed as its argument.

**const**  
A JavaScript keyword that declares a variable. The variable cannot be reassigned after it is set.

**DevTools**  
Chrome DevTools is a set of tools built into Chrome. It includes the Elements panel (for inspecting the DOM), the Console (for running JavaScript), the Network panel, and others. You open it with F12.

**Console**  
A panel in Chrome DevTools. It is a text area where you type or paste JavaScript. When you press Enter, Chrome executes that JavaScript in the context of the current page.

**JavaScript**  
A programming language. Browsers can execute JavaScript. The script is written in JavaScript.

**.js file extension**  
The `.js` extension indicates that the file contains JavaScript source code. It is the standard extension for JavaScript files. The script is meant to be copied into the Console, not run as a file, but `.js` correctly identifies the file's contents as JavaScript.

</details>

---

## Things to Keep in Mind

- The script selects only the items currently visible on the page. If your search returns many results across multiple pages, you may need to scroll or go to the next page and run the script again.
- If Chrome changes the structure of its history page in a future update, the script may stop working and would need to be updated.
- Use this only on your own browser and device.

---

## What's in This Project

```
Chrome-Console-Log-Clear/
├── select-history-items.js   The JavaScript code to paste into the Console
└── README.md                 This file (the instructions)
```

---

## Development

This project was developed using the Cursor Composer 1.5 agent, with each stage reviewed by a human to ensure functionality and correctness.

For issues, bugs, or contributions, please contact the repository maintainer: [https://github.com/hamzasiyam](https://github.com/hamzasiyam).

---

## License

Free to use and modify for personal use.
