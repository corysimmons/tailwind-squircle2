const plugin = require('tailwindcss/plugin');

function generateSquirclePath(n = 4) {
  // Use fewer points for better browser compatibility
  const points = [];
  const steps = 32; // Reduced from 100 to 32 for better performance and compatibility
  
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * 2 * Math.PI;
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    
    // Superellipse formula: x^n + y^n = 1
    // Parametric form: x = sign(cos(t)) * |cos(t)|^(2/n), y = sign(sin(t)) * |sin(t)|^(2/n)
    const x = Math.sign(cosT) * Math.pow(Math.abs(cosT), 2/n);
    const y = Math.sign(sinT) * Math.pow(Math.abs(sinT), 2/n);
    
    // Transform from [-1,1] to [0,1] coordinate system for CSS
    const transformedX = (x + 1) / 2;
    const transformedY = (1 - y) / 2; // Flip Y axis for CSS coordinate system
    
    points.push(`${(transformedX * 100).toFixed(2)}% ${(transformedY * 100).toFixed(2)}%`);
  }
  
  return `polygon(${points.join(', ')})`;
}

function generateSquircleSVGPath(n = 4, size = 100) {
  const points = [];
  const steps = 100;
  
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * 2 * Math.PI;
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    
    const x = Math.sign(cosT) * Math.pow(Math.abs(cosT), 2/n);
    const y = Math.sign(sinT) * Math.pow(Math.abs(sinT), 2/n);
    
    // Transform to SVG coordinates (0 to size)
    const svgX = ((x + 1) / 2) * size;
    const svgY = ((1 - y) / 2) * size;
    
    if (i === 0) {
      points.push(`M ${svgX.toFixed(2)} ${svgY.toFixed(2)}`);
    } else {
      points.push(`L ${svgX.toFixed(2)} ${svgY.toFixed(2)}`);
    }
  }
  
  points.push('Z');
  return points.join(' ');
}

const squirclePlugin = plugin(function({ addUtilities, e }) {
  const squircleUtilities = {};
  
  // Default squircle variations
  const squircleVariations = {
    'squircle': 4,      // Perfect squircle
    'squircle-soft': 6, // Softer, more rounded
    'squircle-sharp': 8, // Sharper, more square-like
    'squircle-round': 3, // Very rounded
  };
  
  Object.entries(squircleVariations).forEach(([name, n]) => {
    const clipPath = generateSquirclePath(n);
    
    squircleUtilities[`.${e(name)}`] = {
      'clip-path': clipPath,
    };
  });
  
  // Generate SVG data URLs for background masks (alternative approach)
  Object.entries(squircleVariations).forEach(([name, n]) => {
    const svgPath = generateSquircleSVGPath(n, 100);
    const svgString = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="${svgPath}" fill="black"/></svg>`;
    const dataUrl = `data:image/svg+xml,${encodeURIComponent(svgString)}`;
    
    squircleUtilities[`.${e(name)}-mask`] = {
      '-webkit-mask-image': `url("${dataUrl}")`,
      'mask-image': `url("${dataUrl}")`,
      '-webkit-mask-size': 'contain',
      'mask-size': 'contain',
      '-webkit-mask-repeat': 'no-repeat',
      'mask-repeat': 'no-repeat',
      '-webkit-mask-position': 'center',
      'mask-position': 'center',
    };
  });
  
  addUtilities(squircleUtilities);
});

module.exports = squirclePlugin;