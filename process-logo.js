const { Jimp } = require('jimp');

async function processImages() {
  try {
    // 1. Process the generated illustration
    const illus = await Jimp.read('/Users/wellitonbatistadasilva/.gemini/antigravity-ide/brain/3241bd02-6b6b-4003-b42e-3f12ed3c59ba/finca_engraving_1785358170787.png');
    
    // Make white transparent
    illus.scan(0, 0, illus.bitmap.width, illus.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx];
      const g = this.bitmap.data[idx+1];
      const b = this.bitmap.data[idx+2];
      
      // Calculate luminosity (the image is grayscale line art)
      const lum = (r + g + b) / 3;
      
      // If it's pure white, alpha is 0. If it's pure black, alpha is 255.
      // This perfectly anti-aliases the line art!
      this.bitmap.data[idx+3] = 255 - lum;
      
      // Set the color to solid black so the alpha channel handles the drawing
      this.bitmap.data[idx] = 0;
      this.bitmap.data[idx+1] = 0;
      this.bitmap.data[idx+2] = 0;
    });
    
    await illus.write('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-illustration.png');
    console.log('Illustration processed');

    // 2. Crop the text image
    const text = await Jimp.read('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-text-only.png');
    
    // The gap was 695 to 732. Text starts at 732. Image height is 887.
    // Let's crop from y=700 to height
    text.crop({ x: 0, y: 700, w: text.bitmap.width, h: text.bitmap.height - 700 });
    await text.write('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-text-cropped.png');
    console.log('Text cropped');
    
  } catch (err) {
    console.error(err);
  }
}

processImages();
