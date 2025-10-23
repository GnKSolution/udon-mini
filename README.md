# Udon Mini – Bilingual (EN/KR)

This static site now supports English and Korean.

## How it works
- Text elements that should be translated have a `data-i18n` attribute with a key.
- `i18n.js` contains dictionaries for `en` and `ko` and applies translations at runtime.
- The language switcher (EN | KO) in the top navigation lets you toggle languages.
- The choice is saved in `localStorage`; the site starts in your saved language or uses the browser default (ko when `navigator.language` starts with `ko`).

## Add or change translations
1. In `index.html`, add `data-i18n="your_key"` to the element whose text you want to translate.
2. In `i18n.js`, add the same key with values in both `en` and `ko` sections.
3. Reload the page.

## Notes
- If a key is missing in the selected language, it falls back to English.
- For brevity, not every table cell or bullet point is translated yet. You can add more keys progressively without changing the script.

## Run locally
Just open `index.html` in a browser.
