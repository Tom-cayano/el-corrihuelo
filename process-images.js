const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDirs = [
  '/Users/wellitonbatistadasilva/Desktop/fotos casa de celebraciones ',
  '/Users/wellitonbatistadasilva/Desktop/fotos casa de celebraciones /fotos portadas '
];
const outDir = path.join(__dirname, 'public', 'images', 'real');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processImages() {
  let count = 0;
  for (const dir of sourceDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
        const inPath = path.join(dir, file);
        const outName = `real-${count}.webp`;
        const outPath = path.join(outDir, outName);
        
        try {
          await sharp(inPath)
            .rotate() // auto-orient based on EXIF
            .resize({ width: 1920, withoutEnlargement: true })
            .modulate({ brightness: 1.05, saturation: 1.1 }) // slight enhancement
            .sharpen()
            .webp({ quality: 80 })
            .toFile(outPath);
          console.log(`Processed: ${outName} from ${file}`);
          count++;
        } catch (e) {
          console.error(`Failed to process ${file}:`, e);
        }
      }
    }
  }
  console.log(`Total images processed: ${count}`);
}

processImages();
