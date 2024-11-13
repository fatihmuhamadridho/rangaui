const { execSync } = require('child_process');

try {
  // Get the current Git branch name
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  // Check if the current commit has a tag
  const tag = execSync('git describe --tags --exact-match 2>/dev/null || echo ""')
    .toString()
    .trim();

  if (branch === 'master' || tag) {
    process.exit(1); // Trigger a build if on master branch or if there is a tag
  } else {
    process.exit(0); // Skip the build if neither condition is met
  }
} catch (error) {
  console.error('Error retrieving Git branch or tag:', error);
  process.exit(0); // Skip the build on error
}
