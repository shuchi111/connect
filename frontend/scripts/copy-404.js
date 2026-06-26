const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");
const notFoundPath = path.join(buildDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("Build output not found. Run `yarn build` first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("Copied index.html → 404.html for GitHub Pages SPA routing.");
