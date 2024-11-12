import path from 'node:path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';

type CSSExports = { [key: string]: string }; // Tipe untuk ekspor CSS

async function processFile(
  filePath: string,
  esmOutputFolder: string,
  cjsOutputFolder: string,
  stylesOutputFolder: string
) {
  let cssExports: CSSExports = {}; // Simpan kelas CSS yang diekspor

  const result = await postcss([
    postcssModules({
      generateScopedName: '[local]',
      getJSON: (_, json) => {
        cssExports = json; // Simpan ekspor CSS
      },
    }),
  ]).process(fs.readFileSync(filePath, 'utf-8'), {
    from: filePath,
    to: filePath,
    map: { inline: false }, // Hasilkan source map secara terpisah
  });

  // Tentukan jalur untuk file ESM dan CJS
  const relativePath = path
    .relative(path.resolve(__dirname, '../src'), filePath)
    .replace('.module.css', '.module.css');
  const esmCSSPath = path.join(esmOutputFolder, relativePath + '.mjs');
  const cjsCSSPath = path.join(cjsOutputFolder, relativePath + '.cjs');

  // Konten untuk file `.module.css.mjs` dan `.module.css.cjs`
  const cssModuleContent = `var classes = ${JSON.stringify(cssExports, null, 2)};

export { classes as default };
//# sourceMappingURL=${path.basename(esmCSSPath)}.map
`;

  const cjsModuleContent = `var classes = ${JSON.stringify(cssExports, null, 2)};

module.exports = classes;
//# sourceMappingURL=${path.basename(cjsCSSPath)}.map
`;

  // Tulis file ESM (.module.css.mjs) dan source map-nya
  await fs.ensureDir(path.dirname(esmCSSPath));
  await fs.writeFile(esmCSSPath, cssModuleContent);
  await fs.writeFile(`${esmCSSPath}.map`, result.map.toString());

  // Tulis file CJS (.module.css.cjs) dan source map-nya
  await fs.ensureDir(path.dirname(cjsCSSPath));
  await fs.writeFile(cjsCSSPath, cjsModuleContent);
  await fs.writeFile(`${cjsCSSPath}.map`, result.map.toString());

  // Tulis file CSS murni untuk folder `styles` untuk global import
  const stylesCSSPath = path.join(stylesOutputFolder, relativePath + '.css');
  await fs.ensureDir(path.dirname(stylesCSSPath));
  await fs.writeFile(stylesCSSPath, result.css);
  await fs.writeFile(`${stylesCSSPath}.map`, result.map.toString());

  return stylesCSSPath; // Kembalikan jalur file CSS untuk digunakan di global.css
}

export async function generateCSS() {
  const packagesPath = path.resolve(__dirname, '../src'); // Path ke file sumber
  const esmOutputFolder = path.resolve(__dirname, '../esm'); // Folder output untuk ESM
  const cjsOutputFolder = path.resolve(__dirname, '../cjs'); // Folder output untuk CJS
  const stylesOutputFolder = path.resolve(__dirname, '../styles'); // Folder output untuk CSS global
  const files: string[] = await glob(`${packagesPath}/**/*.module.css`); // Temukan semua file .module.css

  if (files.length === 0) {
    console.log('No .module.css files found');
    return;
  }

  await fs.ensureDir(stylesOutputFolder); // Pastikan folder styles tersedia

  // Proses setiap file .module.css dan simpan path untuk global.css
  const cssFiles: string[] = [];
  for (const file of files) {
    const stylesCSSPath = await processFile(
      file,
      esmOutputFolder,
      cjsOutputFolder,
      stylesOutputFolder
    );
    cssFiles.push(stylesCSSPath); // Kumpulkan path file CSS yang dihasilkan untuk global.css
  }

  // Buat file global.css di dalam folder styles yang mengimpor semua file CSS lainnya
  const globalCSSPath = path.join(stylesOutputFolder, 'global.css');
  const globalCSSContent = cssFiles
    .map(
      (cssFile) => `@import './${path.relative(stylesOutputFolder, cssFile).replace(/\\/g, '/')}';`
    )
    .join('\n');
  await fs.writeFile(globalCSSPath, globalCSSContent);

  console.log('All CSS Modules have been converted. global.css created in styles folder');
}

// Jalankan skrip jika dieksekusi secara langsung
if (require.main === module) {
  generateCSS();
}
