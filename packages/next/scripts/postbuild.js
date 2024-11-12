const fs = require('fs');
const path = require('path');

// Directory paths for ESM and CJS builds
const esmDir = path.join(__dirname, '../esm');
const cjsDir = path.join(__dirname, '../cjs');

// Function to recursively get all files in a directory
function getAllFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, ext));
    } else if (filePath.endsWith(ext)) {
      results.push(filePath);
    }
  });
  return results;
}

// Function to replace .js with .mjs/.cjs in import/export statements and .module.css to .module.css.mjs/.module.css.cjs
function replaceImportPaths(filePath, ext) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content
    .replace(/(\.\/.*?)(\.js)(['"])/g, `$1.${ext}$3`) // Replace only .js at the end of imports/exports
    .replace(/(from\s+['"].*?)(\.module\.css)(['"])/g, `$1.module.css.${ext}$3`) // Replace only .module.css in imports
    .replace(/(require\(['"].*?)(\.module\.css)(['"]\))/g, `$1.module.css.${ext}$3`); // Replace only .module.css in require statements

  fs.writeFileSync(filePath, updatedContent);
}

// Process ESM files (.js to .mjs and .module.css to .module.css.mjs)
getAllFiles(esmDir, '.js').forEach((file) => {
  const newFilePath = file.replace(/\.js$/, '.mjs'); // Change file extension to .mjs
  fs.renameSync(file, newFilePath);
  replaceImportPaths(newFilePath, 'mjs');
});

// Process CJS files (.js to .cjs and .module.css to .module.css.cjs)
getAllFiles(cjsDir, '.js').forEach((file) => {
  const newFilePath = file.replace(/\.js$/, '.cjs'); // Change file extension to .cjs
  fs.renameSync(file, newFilePath);
  replaceImportPaths(newFilePath, 'cjs');
});

console.log('Post-build processing complete. All .js files renamed and imports updated.');
