#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import our plugin
const squirclePlugin = require('./plugin.js');

// Mock Tailwind's addUtilities function to capture the utilities
let capturedUtilities = {};

const mockAddUtilities = (utilities) => {
  capturedUtilities = { ...capturedUtilities, ...utilities };
};

// The plugin is a function that returns a plugin object
// We need to call the handler function from the plugin
const pluginInstance = squirclePlugin;
pluginInstance.handler({ addUtilities: mockAddUtilities });

// Convert captured utilities to v4 @utility format
function convertToV4Utilities(utilities) {
  let css = '/*\n * Tailwind CSS v4 Squircle Plugin\n * Generated from plugin.js\n */\n\n';
  
  for (const [selector, styles] of Object.entries(utilities)) {
    // Remove the leading dot from selector
    const className = selector.replace(/^\./, '');
    
    css += `@utility ${className} {\n`;
    
    // Add each style property
    for (const [property, value] of Object.entries(styles)) {
      css += `  ${property}: ${value};\n`;
    }
    
    css += '}\n\n';
  }
  
  return css;
}

// Generate the v4 CSS
const v4CSS = convertToV4Utilities(capturedUtilities);

// Write to plugin-v4.css
fs.writeFileSync('./plugin-v4.css', v4CSS);

console.log('✅ Generated plugin-v4.css from plugin.js');
console.log(`📝 Generated ${Object.keys(capturedUtilities).length} utilities:`);
Object.keys(capturedUtilities).forEach(selector => {
  console.log(`   - ${selector}`);
});