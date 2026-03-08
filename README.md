# Chrome History — Bulk Delete by Keyword

A lightweight JavaScript script that lets you **delete specific search items in bulk** on Chrome's history page. Search for a keyword, run the script, and remove all matching entries with one click instead of selecting each item manually.

---

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Things to Keep in Mind](#things-to-keep-in-mind)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

---

## Project Description

### What It Does

The script selects every history item currently visible on the Chrome history page by programmatically clicking each item's checkbox. After it runs, you click the Delete button once to remove all selected items.

### Motivation & Problem

Manually selecting dozens or hundreds of history entries is tedious. This tool solves that by letting you:

- **Search** for a keyword (e.g., `youtube.com`, `reddit`, or any term) in Chrome's history search box
- **Select all** matching entries at once with the script
- **Delete** them in one action

It also helps you control your data and remove items from your feed that you don't want others to see.

### Technologies Used

- **Vanilla JavaScript** — No frameworks, build tools, or dependencies. The script runs directly in Chrome's DevTools Console.

### Challenges Faced

The main challenge was **finding the correct internal structure** of Chrome's history page. Chrome uses Shadow DOM and custom elements (`history-app`, `history-list`, `history-item`, `cr-checkbox`), which are not exposed in the main document. The script navigates these nested Shadow DOM trees to reach the checkboxes.

### Possible Future Improvements

- One-click button to run the script without opening DevTools
- Chrome extension for easier access
- Integration with a script library extension for Chrome

---

## Features

- **Bulk selection by keyword** — Search for a term, run the script, and select all visible matching entries
- **No installation** — Copy and paste into the Console; no extensions or downloads required
- **Lightweight** — Plain JavaScript, no dependencies
- **Privacy-focused** — Helps you remove unwanted history entries from your feed

---

## Installation

No installation is required. The script runs directly in Chrome's built-in DevTools Console.

**Requirements:**

- Google Chrome browser
- No dependencies

**Setup:**

1. Clone or download this repository
2. Open the file `select-history-items.js` — you will copy its contents into the Console

---

## Usage

### Step-by-Step Instructions

1. Open Chrome and type **`chrome://history`** in the address bar, then press Enter.

2. In the search box on that page, type the word or site you want to remove (e.g., `youtube.com`, `reddit`, or any term). Chrome will display only the history entries that match.

3. Press **F12** to open Chrome DevTools. A panel opens at the bottom or side of the window.

4. Click the **Console** tab in that panel.

5. Open the file `select-history-items.js`, select all the text, and copy it (Ctrl+C).

6. Click inside the Console, paste the code (Ctrl+V), and press **Enter**.

7. The script executes. Every history item on the page is now selected (its checkbox is checked).

8. Click the **Delete** button on the history page to remove the selected items.

### Example Workflow

```
Search: "youtube.com" → Run script → Click Delete → All YouTube entries removed
```

### Screenshots

**Before** — History items unselected:

![Before running the script](images/before.png)

**After** — All matching items selected (ready to delete):

![After running the script](images/after.png)

---

## How It Works

1. Finds the `history-app` element in the page's DOM
2. Accesses that element's Shadow DOM via `shadowRoot` to reach the elements inside it
3. Finds the `history-list` element inside the app's Shadow DOM
4. Accesses the list's Shadow DOM to reach the `history-item` elements
5. Loops through each `history-item`, accesses each item's Shadow DOM, finds the `cr-checkbox` element, and calls `click()` on it if it is not already checked
6. After the script finishes, all visible history items are selected. You then click Delete to remove them

<details>
<summary><strong>Definitions</strong> (click to expand)</summary>

**DOM (Document Object Model)**  
The structure of a webpage. When the browser loads HTML, it builds a tree of objects. Each object represents an element on the page. JavaScript can read and modify these objects to change what the page shows or how it behaves.

**Shadow DOM**  
A web standard that lets you attach a separate DOM tree to an element. That tree is encapsulated and not directly visible when you query the main document. Chrome's history page uses Shadow DOM for its UI components. To work with elements inside Shadow DOM, you must first get the element that hosts it, then use its `shadowRoot` property.

**shadowRoot**  
A property on an element. If that element has a Shadow DOM attached, `shadowRoot` returns the root node of that Shadow DOM tree. You use it to query and manipulate elements inside the Shadow DOM.

**history-app**  
A custom element used on Chrome's history page. It is the root container for the history interface. The rest of the history UI lives inside its Shadow DOM.

**history-list**  
A custom element that holds the list of history entries. It is inside the Shadow DOM of `history-app`.

**history-item**  
A custom element. Each one represents a single browsing history entry. Multiple `history-item` elements are inside the Shadow DOM of `history-list`.

**cr-checkbox**  
A custom checkbox element used by Chrome's internal UI. On the history page, each `history-item` contains a `cr-checkbox`. Clicking it selects or deselects that history entry.

</details>

---

## Things to Keep in Mind

- The script selects only the items **currently visible** on the page. If your search returns many results across multiple pages, you may need to scroll or go to the next page and run the script again.
- If Chrome changes the structure of its history page in a future update, the script may stop working and would need to be updated.
- Use this only on your own browser and device.

---

## Project Structure

```
Chrome-Console-Log-Clear/
├── select-history-items.js   # JavaScript code to paste into the Console
├── images/
│   ├── before.png            # Screenshot before running the script
│   └── after.png             # Screenshot after running the script
├── README.md                 # This file
└── LICENSE                   # MIT License
```

---

## Contributing

Contributions are welcome. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

For bugs, feature requests, or questions, please [open an issue](https://github.com/hamzasiyam/Chrome-Console-Log-Clear/issues) or contact the maintainer: [@hamzasiyam](https://github.com/hamzasiyam).

---

## Credits

- **Development** — This project was developed using [Cursor Composer 1.5](https://cursor.com), with each stage reviewed by a human to ensure functionality and correctness.
- **README Guide** — Structure inspired by the freeCodeCamp article [How to Write a Good README File for Your GitHub Project](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/).

---

## License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it for personal or commercial use. See the [LICENSE](LICENSE) file for details.
