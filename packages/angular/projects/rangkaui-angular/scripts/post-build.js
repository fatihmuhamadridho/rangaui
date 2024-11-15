const fs = require('fs');
const path = require('path');

// Path to the generated package.json
const distPath = path.resolve(__dirname, '../../dist/rangkaui-angular');
const packageJsonPath = path.join(distPath, 'package.json');

if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  // Keep only the desired fields
  const cleanedPackageJson = {
    name: packageJson.name,
    version: packageJson.version,
    peerDependencies: packageJson.peerDependencies,
    dependencies: packageJson.dependencies,
    sideEffects: packageJson.sideEffects,
    module: 'fesm2022/rangkaui-angular.mjs',
    typings: 'index.d.ts',
    exports: {
      './package.json': {
        default: './package.json',
      },
      '.': {
        types: './index.d.ts',
        esm2022: './esm2022/rangkaui-angular.mjs',
        esm: './esm2022/rangkaui-angular.mjs',
        default: './fesm2022/rangkaui-angular.mjs',
      },
    },
  };

  // Write the updated package.json back to the dist folder
  fs.writeFileSync(packageJsonPath, JSON.stringify(cleanedPackageJson, null, 2));
  console.log('Cleaned up package.json in dist folder.');
}
