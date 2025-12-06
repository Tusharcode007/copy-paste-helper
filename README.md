# copy-paste-helper
creating a very simple project 

# Copy–Paste Helper (Clipboard API Demo)

A very small web app that demonstrates the **Clipboard API** in JavaScript.

## Features

- Type text into a textarea.
- **Copy Text** button:
  - Uses `navigator.clipboard.writeText()` to copy the text.
- **Paste Text** button:
  - Uses `navigator.clipboard.readText()` to paste clipboard content into the textarea.
- Status message area shows:
  - "Copied to clipboard ✅"
  - "Pasted from clipboard ✅"
  - Error messages when the browser blocks clipboard access or Clipboard API is not supported.

## What this project teaches

- How to use the **Clipboard API** (`navigator.clipboard`).
- How to work with `textarea.value`.
- Simple async/await usage and basic error handling.
- DOM manipulation and event listeners.

## Files

- `index.html` — main page structure
- `style.css` — basic styling
- `script.js` — Clipboard logic and DOM events
- `README.md` — project explanation

## How to run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser **(Chrome, Edge, etc.)`.

For best results, open it via a local server (e.g. VS Code Live Server), because
some browsers restrict clipboard access for plain `file://` pages.

## Browser Support Notes

- The Clipboard API requires a secure context:
  - `https://` or `http://localhost`
- If clipboard access fails, the app will show a helpful status message instead of crashing.
