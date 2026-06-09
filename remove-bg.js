const sharp = require('sharp');

async function processImage() {
  const { data, info } = await sharp('public/favicon.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const numPixels = info.width * info.height;
  for (let i = 0; i < numPixels; i++) {
    const idx = i * 4; 
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    if (r > 230 && g > 230 && b > 230) {
      data[idx + 3] = 0; 
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    }
  })
  .png()
  .toFile('public/favicon-transparent.png');
}

processImage().catch(console.error);
