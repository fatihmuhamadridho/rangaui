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

// Function to replace .js with .mjs/.cjs in import/export statements
function replaceImportPaths(filePath, ext) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content
    .replace(/(from\s+['"].*?)(\.js)(['"])/g, `$1${ext}$3`)
    .replace(/(require\(['"].*?)(\.js)(['"]\))/g, `$1${ext}$3`);
  fs.writeFileSync(filePath, updatedContent);
}

// Process ESM files (.js to .mjs)
getAllFiles(esmDir, '.js').forEach((file) => {
  const newFilePath = file.replace(/\.js$/, '.mjs');
  fs.renameSync(file, newFilePath);
  replaceImportPaths(newFilePath, '.mjs');
});

// Process CJS files (.js to .cjs)
getAllFiles(cjsDir, '.js').forEach((file) => {
  const newFilePath = file.replace(/\.js$/, '.cjs');
  fs.renameSync(file, newFilePath);
  replaceImportPaths(newFilePath, '.cjs');
});

console.log('Post-build processing complete. All .js files renamed and imports updated.');
