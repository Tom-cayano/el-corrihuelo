const { Jimp } = require('jimp');

async function splitLogo() {
  try {
    // Read the transparent version of the ORIGINAL logo
    const img = await Jimp.read('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-transparente.png');
    
    // Crop the top part (the house and tree)
    img.crop({ x: 0, y: 0, w: img.bitmap.width, h: 700 });
    
    await img.write('/Users/wellitonbatistadasilva/Desktop/el-corrihuelo/public/images/logo-house.png');
    console.log('Original house/tree isolated successfully!');
  } catch (err) {
    console.error(err);
  }
}

splitLogo();
