const { Jimp } = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-transparente.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // The illustration is usually at the top, text at the bottom.
    // Let's assume the text starts around y = 450 (middle of 887).
    // Let's find the first non-transparent pixel in the bottom half.
    
    // We will just crop the top half completely.
    // Wait, let's scan where the text starts by looking for non-transparent pixels from the bottom up.
    
    // Or let's just make the top 500 pixels completely transparent, erasing the illustration!
    // We can just iterate and set alpha=0 for y < 500 (we might need to adjust this).
    
    // Let's write a function to erase bounding box of the illustration
    let minY = height;
    let maxY = 0;
    
    // Let's print out the row density of non-transparent pixels to find the gap between illustration and text
    const rowDensity = new Array(height).fill(0);
    
    image.scan(0, 0, width, height, function (x, y, idx) {
      const alpha = this.bitmap.data[idx + 3];
      if (alpha > 50) {
        rowDensity[y]++;
      }
    });

    console.log("Row density map:");
    let gapStart = 0;
    let gapEnd = 0;
    let inGap = false;
    
    // Find the largest gap of empty rows (density == 0) in the middle
    let maxGap = 0;
    let currentGapStart = 0;
    
    for (let y = 0; y < height; y++) {
      if (rowDensity[y] === 0) {
        if (!inGap) {
          inGap = true;
          currentGapStart = y;
        }
      } else {
        if (inGap) {
          inGap = false;
          const gapSize = y - currentGapStart;
          if (gapSize > maxGap && currentGapStart > 200 && currentGapStart < 700) {
            maxGap = gapSize;
            gapStart = currentGapStart;
            gapEnd = y;
          }
        }
      }
    }
    
    console.log("Largest gap between illustration and text starts at", gapStart, "and ends at", gapEnd);
    
    // Now erase everything above the gap (the illustration)
    image.scan(0, 0, width, gapEnd, function (x, y, idx) {
      this.bitmap.data[idx + 3] = 0; // Set alpha to 0
    });
    
    // Now for the subtitle: we need to increase contrast and thickness by 5%.
    // To increase thickness, we can apply a tiny blur or dilate? Jimp doesn't have a simple dilate.
    // We can just duplicate the subtitle pixels slightly offset.
    // The subtitle is usually below the main text "EL CORRIHUELO".
    // Let's find the gap between main text and subtitle to isolate subtitle.
    
    await image.write('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-text-only.png');
    console.log('Text isolated and saved to logo-text-only.png');
    
  } catch (err) {
    console.error(err);
  }
}

processLogo();
