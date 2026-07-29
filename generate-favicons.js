const { Jimp } = require('jimp');

async function generateFavicons() {
  try {
    const sourcePath = '/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-house.png';
    const outDir = '/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public';
    
    const sizes = [
      { name: 'favicon-16x16.png', size: 16 },
      { name: 'favicon-32x32.png', size: 32 },
      { name: 'apple-touch-icon.png', size: 180 },
      { name: 'android-chrome-192x192.png', size: 192 },
      { name: 'android-chrome-512x512.png', size: 512 }
    ];

    for (const item of sizes) {
      const img = await Jimp.read(sourcePath);
      // Resize to square, maintaining aspect ratio and adding transparent borders
      img.contain({ w: item.size, h: item.size });
      await img.write(`${outDir}/${item.name}`);
      console.log(`Generated ${item.name}`);
      
      // For favicon.ico, we just copy the 32x32 png
      if (item.size === 32) {
        await img.write(`${outDir}/favicon-temp.png`);
        require('fs').renameSync(`${outDir}/favicon-temp.png`, `${outDir}/favicon.ico`);
        console.log(`Generated favicon.ico`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

generateFavicons();
