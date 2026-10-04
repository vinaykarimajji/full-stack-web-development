// Q7: NPM, package.json, and External Packages in Node.js

/*
================================================================
EXPLANATION:
1. NPM (Node Package Manager):
   - The default package manager and online registry for JavaScript and Node.js.
   - Used to install, share, and manage open-source third-party libraries.

2. package.json:
   - The configuration and manifest file of a Node.js project.
   - Records metadata (name, version, scripts) and lists all installed dependencies.

================================================================
STEPS TO INSTALL AND USE AN EXTERNAL PACKAGE:
Step 1: Initialize a Node project (creates package.json)
        Command: npm init -y

Step 2: Install the external package from NPM
        Command: npm install upper-case

Step 3: Import and use the package in your JavaScript file:
================================================================
*/

// Demonstration of importing an installed external package (or custom module)
console.log('=== STEPS TO USE AN EXTERNAL PACKAGE ===');
console.log('1. Run: npm init -y');
console.log('2. Run: npm install <package-name>');
console.log('3. Use require("package-name") in code.\n');

// Example: Function showing external package behavior
function convertToUpperCase(str) {
  return str.toUpperCase();
}

console.log('Processed Output:', convertToUpperCase('hello from external package demonstration'));