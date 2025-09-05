#!/usr/bin/env node

const fs = require('fs');

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

// Convert captured utilities to @utility format
function convertToCSSUtilities(utilities) {
  let css = '/*\n * Tailwind CSS Squircle Plugin\n * Generated from plugin.js\n */\n\n';
  
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

// Generate the CSS
const css = convertToCSSUtilities(capturedUtilities);

// Write to plugin.css
fs.writeFileSync('./plugin.css', css);

console.log('✅ Generated plugin.css from plugin.js');
console.log(`📝 Generated ${Object.keys(capturedUtilities).length} utilities:`);
Object.keys(capturedUtilities).forEach(selector => {
  console.log(`   - ${selector}`);
});