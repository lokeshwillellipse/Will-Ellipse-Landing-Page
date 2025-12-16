/*
Generates favicon PNG (32x32) and favicon.ico from the project's SVG logo.
Usage:
  npm install --save-dev sharp png-to-ico
  node scripts/generate-favicons.js

This script will read src/assets/logo.svg and write to public/favicon-32x32.png and public/favicon.ico
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

async function generate() {
  const svgPath = path.resolve(__dirname, '../src/assets/logo.svg');
  const outPng = path.resolve(__dirname, '../public/favicon-32x32.png');
  const outIco = path.resolve(__dirname, '../public/favicon.ico');

  if (!fs.existsSync(svgPath)) {
    console.error('SVG logo not found at', svgPath);
    process.exit(1);
  }

  // Render 32x32 PNG
  await sharp(svgPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(outPng);

  // Create ICO from 32x32 PNG (png-to-ico expects Buffer or array of Buffers)
  const pngBuffer = fs.readFileSync(outPng);
  const icoBuffer = await pngToIco([pngBuffer]);
  fs.writeFileSync(outIco, icoBuffer);

  console.log('Wrote', outPng);
  console.log('Wrote', outIco);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});