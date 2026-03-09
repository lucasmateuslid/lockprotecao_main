import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, basename, extname } from 'path';

const INPUT_DIR = './public/assets/imgs/colisions';
const OUTPUT_DIR = './public/assets/imgs/colisions/optimized';
const WIDTHS = [400, 800, 1200];

mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter(f =>
  ['.webp', '.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

for (const file of files) {
  const name = basename(file, extname(file));
  for (const width of WIDTHS) {
    await sharp(join(INPUT_DIR, file))
      .resize(width)
      .webp({ quality: 80 })
      .toFile(join(OUTPUT_DIR, `${name}-${width}w.webp`));
    console.log(`✅ ${name}-${width}w.webp`);
  }
}
