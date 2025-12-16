Favicon generation

Run the provided script to generate a 32x32 PNG and an ICO from the project's SVG logo:

1. Install dev dependencies:

```bash
npm install --save-dev sharp png-to-ico
```

2. Run the generator:

```bash
npm run generate:favicons
```

Files created:
- `public/favicon-32x32.png`
- `public/favicon.ico`

Notes:
- Some browsers accept SVG favicons directly (we already reference the SVG in `index.html`). The generated PNG and ICO are fallbacks for older or picky browsers.
- If you want different sizes, update `scripts/generate-favicons.js` to output additional sizes and include them in `index.html`.