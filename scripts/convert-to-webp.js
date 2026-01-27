// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require("sharp");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const inputDirs = [
  "./public/images",
  "./public/images/services",
  "./public/images/gallery",
  "./public/images/about",
];

let totalConverted = 0;
let totalSkipped = 0;
let totalErrors = 0;

console.log("🚀 WebP Dönüştürücü Başlatılıyor...\n");

// Recursive function to process directories
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Klasör bulunamadı: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);

  if (files.length === 0) {
    console.log(`📂 ${dir} - Dosya yok\n`);
    return;
  }

  console.log(`\n📂 İşleniyor: ${dir}`);
  console.log("─".repeat(50));

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    // Alt klasör varsa recursive çağır
    if (stat.isDirectory()) {
      processDirectory(fullPath);
      return;
    }

    // JPG/JPEG/PNG dosyalarını işle
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

      // Zaten WebP varsa atla
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Zaten var: ${file}`);
        totalSkipped++;
        return;
      }

      sharp(fullPath)
        .webp({ quality: 85 })
        .toFile(outputPath)
        .then(() => {
          totalConverted++;
          const originalSize = fs.statSync(fullPath).size;
          const newSize = fs.statSync(outputPath).size;
          const savings = Math.round(
            ((originalSize - newSize) / originalSize) * 100,
          );

          console.log(
            `✅ ${file} → ${path.basename(outputPath)} (-${savings}%)`,
          );
        })
        .catch((err) => {
          totalErrors++;
          console.error(`❌ ${file}: ${err.message}`);
        });
    }
  });
}

// Tüm klasörleri işle
inputDirs.forEach((dir) => {
  processDirectory(dir);
});

// Özet rapor
setTimeout(() => {
  console.log("\n" + "=".repeat(50));
  console.log("✨ TAMAMLANDI!");
  console.log("=".repeat(50));
  console.log(`✅ Dönüştürülen: ${totalConverted}`);
  console.log(`⏭️  Atlanan: ${totalSkipped}`);
  console.log(`❌ Hata: ${totalErrors}`);
  console.log("=".repeat(50) + "\n");
}, 3000);
