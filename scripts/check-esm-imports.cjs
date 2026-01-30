#!/usr/bin/env node
/**
 * Check that all relative imports in TypeScript files use .js extensions
 * This ensures ESM compatibility when the package is used in frontend projects
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

// Match relative imports/exports without .js extension
// Captures: import/export ... from './path' or '../path' (without .js)
const importRegex = /(?:import|export).*from\s+['"](\.[^'"]+)['"]/g;

let hasErrors = false;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    let match;
    importRegex.lastIndex = 0;
    while ((match = importRegex.exec(line)) !== null) {
      const importPath = match[1];
      // Check if it's a relative import without .js extension
      if (importPath.startsWith('.') && !importPath.endsWith('.js')) {
        const relativePath = path.relative(process.cwd(), filePath);
        console.error(`${relativePath}:${index + 1} - Missing .js extension: "${importPath}"`);
        hasErrors = true;
      }
    }
  });
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      checkFile(filePath);
    }
  }
}

console.log('Checking ESM import extensions...');
walkDir(srcDir);

if (hasErrors) {
  console.error('\n❌ ESM import check failed. All relative imports must use .js extensions.');
  process.exit(1);
} else {
  console.log('✅ All imports use .js extensions.');
  process.exit(0);
}
