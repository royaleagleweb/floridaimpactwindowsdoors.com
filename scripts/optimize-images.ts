import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname } from "path";

const imagesDir = join(process.cwd(), "public", "images");
const files = readdirSync(imagesDir);

async function compressImages() {
  for (const file of files) {
    const filePath = join(imagesDir, file);
    const stat = statSync(filePath);
    const ext = extname(file).toLowerCase();
    const sizeMB = stat.size / 1024 / 1024;

    if (ext === ".png" && sizeMB > 0.2) {
      console.log(`Compressing PNG: ${file} (${sizeMB.toFixed(1)}MB)`);
      const buffer = await sharp(filePath).png({ quality: 80, compressionLevel: 9 }).toBuffer();
      await sharp(buffer).toFile(filePath);
      const newSize = statSync(filePath).size / 1024;
      console.log(`  → ${newSize.toFixed(0)}KB`);
    } else if ((ext === ".jpg" || ext === ".jpeg") && sizeMB > 0.1) {
      console.log(`Compressing JPG: ${file} (${sizeMB.toFixed(1)}MB)`);
      const buffer = await sharp(filePath).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      await sharp(buffer).toFile(filePath);
      const newSize = statSync(filePath).size / 1024;
      console.log(`  → ${newSize.toFixed(0)}KB`);
    }
  }

  // Also rename files with spaces
  for (const file of readdirSync(imagesDir)) {
    if (file.includes(" ")) {
      const newName = file.toLowerCase().replace(/\s+/g, "-");
      const { renameSync } = await import("fs");
      renameSync(join(imagesDir, file), join(imagesDir, newName));
      console.log(`Renamed: "${file}" → "${newName}"`);
    }
  }

  console.log("\nDone! Image optimization complete.");
}

compressImages().catch(console.error);
