// Q6: Node.js Built-in Modules (os, path, fs)

// 1. OS MODULE (Provides operating system information)
const os = require('os');
console.log('=== 1. OS MODULE ===');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory (GB):', (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log('Free Memory (GB):', (os.freemem() / (1024 ** 3)).toFixed(2));

// 2. PATH MODULE (Handles and transforms file paths across different operating systems)
const path = require('path');
console.log('\n=== 2. PATH MODULE ===');
const samplePath = path.join(__dirname, 'data', 'report.pdf');
console.log('Joined Path:', samplePath);
console.log('File Name:', path.basename(samplePath));
console.log('File Extension:', path.extname(samplePath));

// 3. FS MODULE (Interacts with the file system: create, read, write files)
const fs = require('fs');
console.log('\n=== 3. FS MODULE ===');
const testFile = 'module_demo.txt';
fs.writeFileSync(testFile, 'Hello from Node.js FS module!');
console.log('File written successfully.');
console.log('File content read:', fs.readFileSync(testFile, 'utf-8'));

// Clean up temporary file
fs.unlinkSync(testFile);