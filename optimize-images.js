/**
 * optimize-images.js
 * Processa tutte le immagini in public/img/ e le converte in WebP ottimizzato.
 *
 * Uso:
 *   node optimize-images.js
 *
 * Installa prima sharp:
 *   npm install sharp --save-dev
 *
 * Lo script:
 *  - Converte JPG/PNG/HEIC → WebP
 *  - Crea due versioni per ogni immagine:
 *      /img/steps/02.webp        (landscape 1200×675 per hero/card desktop)
 *      /img/steps/02@mobile.webp (portrait  600×800  per mobile se serve)
 *  - Lascia gli originali intatti
 */

const sharp  = require('sharp');
const fs     = require('fs');
const path   = require('path');

// ── CONFIGURAZIONE ────────────────────────────────────────────────────────────

const INPUT_DIR  = path.join(__dirname, 'public/img');
const QUALITY    = 92;

// Profili di ritaglio per ogni contesto
const PROFILES = {
  // hero del servizio singolo  (.service-hero-img — 100% × 320px)
  hero: {
    width:  1400,
    height: 560,   // aspect ratio ~2.5:1
    suffix: ''     // file principale, es. 02.webp
  },
  // card nella home/lista      (.card-img — varia, max ~400×160px)
  card: {
    width:  800,
    height: 320,   // aspect ratio 2.5:1 coerente
    suffix: '@card'
  }
};

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// ── FUNZIONI ──────────────────────────────────────────────────────────────────

async function processImage(inputPath, outputDir, baseName) {
  for (const [profileName, profile] of Object.entries(PROFILES)) {
    const outputName = `${baseName}${profile.suffix}.webp`;
    const outputPath = path.join(outputDir, outputName);

    // Salta se già esiste e più recente dell'originale
    if (fs.existsSync(outputPath)) {
      const inStat  = fs.statSync(inputPath);
      const outStat = fs.statSync(outputPath);
      if (outStat.mtimeMs > inStat.mtimeMs) {
        console.log(`  ⏭  skip  ${outputName} (già aggiornato)`);
        continue;
      }
    }

    try {
      const info = await sharp(inputPath)
        .rotate()                          // rispetta l'EXIF orientation (fondamentale per foto iPhone)
        .resize({
          width:  profile.width,
          height: profile.height,
          fit:    'cover',
          position: 'centre',
          kernel: sharp.kernel.lanczos3  
        })
        .webp({ QUALITY, effort: 6 })
        .toFile(outputPath);

      const kb = Math.round(info.size / 1024);
      console.log(`  ✅ ${profileName.padEnd(6)} ${outputName} — ${info.width}×${info.height}px ${kb}KB`);
    } catch (err) {
      console.error(`  ❌ errore su ${inputPath}:`, err.message);
    }
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkDir(fullPath);
      continue;
    }

    const ext  = path.extname(entry.name).toLowerCase();
    const base = path.basename(entry.name, ext);

    // Salta già ottimizzate (@card, @mobile ecc.) e file non immagine
    if (!EXTENSIONS.includes(ext))       continue;
    if (base.includes('@'))              continue;

    console.log(`\n📷 ${path.relative(INPUT_DIR, fullPath)}`);
    await processImage(fullPath, dir, base);
  }
}

// ── MAIN ──────────────────────────────────────────────────────────────────────

(async () => {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Cartella non trovata: ${INPUT_DIR}`);
    console.error('   Assicurati di eseguire lo script dalla root del progetto.');
    process.exit(1);
  }

  console.log(`🏗️  Ottimizzazione immagini in ${INPUT_DIR}\n`);
  const start = Date.now();
  await walkDir(INPUT_DIR);
  const sec = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✨ Completato in ${sec}s`);
})();
