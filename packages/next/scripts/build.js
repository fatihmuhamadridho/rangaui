const { exec } = require('child_process');
const util = require('util');
const fs = require('fs');
const path = require('path');

const execPromise = util.promisify(exec);

// Helper function to execute a shell command asynchronously
async function runCommand(command) {
  try {
    console.log(`\nRunning: ${command}`);
    const { stdout, stderr } = await execPromise(command);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    console.log(`✔ Successfully executed: ${command}`);
  } catch (error) {
    console.error(`✖ Failed to execute: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Step 1: Clean the build directories
async function clean() {
  console.log('Step 1: Cleaning build directories...');
  const cleanCommand =
    'rimraf --glob {esm,cjs,lib,dist} *.tsbuildinfo styles.css styles.layer.css || true';
  await runCommand(cleanCommand);
}

// Step 2: Generate CSS files
async function buildCSS() {
  console.log('Step 2: Generating CSS files...');
  const buildCSSCommand = 'tsx scripts/generateCSS.ts';
  await runCommand(buildCSSCommand);
}

// Step 3: Build TypeScript type definitions
async function buildTypes() {
  console.log('Step 3: Building TypeScript definitions...');
  const buildTypesCommand = 'tsc --project tsconfig.json && cp lib/index.d.ts lib/index.d.mts';
  await runCommand(buildTypesCommand);
}

// Step 4: Build ESM modules
async function buildESM() {
  console.log('Step 4: Building ESM modules...');
  const buildESMCommand = 'tsc --project tsconfig.build.json --module ESNext --outDir esm';
  await runCommand(buildESMCommand);
}

// Step 5: Build CJS modules
async function buildCJS() {
  console.log('Step 5: Building CJS modules...');
  const buildCJSCommand = 'tsc --project tsconfig.build.json --module CommonJS --outDir cjs';
  await runCommand(buildCJSCommand);
}

// Step 6: Post-build processing
async function postBuild() {
  console.log('Step 6: Running post-build processing...');
  const postBuildCommand = 'node scripts/postbuild.js';
  await runCommand(postBuildCommand);
}

// Step 7: Update exports with proper file extensions (Final Step)
async function updateExports() {
  console.log('Step 7: Updating exports with proper file extensions...');

  const filesToUpdate = [
    { filePath: path.join(__dirname, '../esm/index.mjs'), ext: 'mjs' },
    { filePath: path.join(__dirname, '../cjs/index.cjs'), ext: 'cjs' },
  ];

  for (const { filePath, ext } of filesToUpdate) {
    if (!fs.existsSync(filePath)) {
      console.warn(`File ${filePath} does not exist. Skipping.`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    if (ext === 'cjs') {
      // Update require paths for CommonJS
      content = content.replace(/(require\(['"])(\.[^.'"]+)(['"]\))/g, `$1$2.${ext}$3`);
    } else if (ext === 'mjs') {
      // Update import paths for ES Modules
      content = content.replace(/(from\s+['"])(\.[^.'"]+)(['"])/g, `$1$2.${ext}$3`);
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated exports in ${filePath}`);
  }
}

// Main build function
async function build() {
  console.log('Starting build process...');
  await clean();
  await buildCSS();
  await buildTypes();
  await buildESM();
  await buildCJS();
  await postBuild();
  await updateExports(); // Ensure this is the last step
  console.log('\n🎉 Build process completed successfully!');
}

// Run the build process
build();
