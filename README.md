# Tailwind Squircle Plugin

A Tailwind CSS plugin for creating beautiful squircle (superellipse) shapes using CSS utilities.

## Features

- **Pure CSS Implementation**: Uses Tailwind CSS `@utility` directives
- **Mathematical Precision**: Generated using the superellipse (Lamé curve) algorithm
- **Multiple Variations**: 4 different roundness levels from very rounded to sharp
- **Browser Compatibility**: Includes both `clip-path` and `mask` variants
- **Zero JavaScript**: No build-time JavaScript required

## Installation

```bash
npm install tailwind-squircle2
```

## Usage

Add the plugin to your CSS file using Tailwind CSS import system:

```css
@import "tailwindcss";
@import "tailwind-squircle2/css";
```

## Available Classes

### Primary Classes (clip-path method)
- `squircle-round` - Very rounded (n=3)
- `squircle` - Perfect balance (n=4)
- `squircle-soft` - Softer corners (n=6)
- `squircle-sharp` - More square-like (n=8)

### Alternative Classes (mask method)
- `squircle-round-mask` - Very rounded (mask)
- `squircle-mask` - Perfect balance (mask)
- `squircle-soft-mask` - Softer corners (mask)  
- `squircle-sharp-mask` - More square-like (mask)

## Examples

### Basic Usage

```html
<!-- Perfect squircle button -->
<button class="squircle bg-blue-500 px-6 py-3 text-white">
  Click me
</button>

<!-- Very rounded squircle card -->
<div class="squircle-round bg-white p-6 shadow-lg">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

<!-- Squircle profile image -->
<img src="profile.jpg" class="squircle w-24 h-24 object-cover" alt="Profile" />
```

## What are Squircles?

Squircles are shapes that sit between squares and circles, created using the superellipse mathematical formula. They provide a modern, smooth aesthetic that's popular in contemporary UI design, especially in mobile interfaces and modern web applications.

## Technical Details

The squircle shapes are generated using the superellipse mathematical formula:

```
x = sign(cos(t)) × |cos(t)|^(2/n)
y = sign(sin(t)) × |sin(t)|^(2/n)
```

Where `n` controls the shape:
- **n = 3**: Very rounded, close to a circle
- **n = 4**: Perfect squircle, balanced between square and circle
- **n = 6**: Softer corners, more square-like
- **n = 8**: Sharp squircle, approaching a rounded rectangle

## Browser Support

- **Clip-path method**: Modern browsers (Chrome 55+, Firefox 54+, Safari 13+)
- **Mask method**: Broader browser support including older versions

## Example Project

### Next.js Example
A complete implementation is available in the [examples/nextjs](./examples/nextjs/) directory.

**Features:**
- Next.js 15 with App Router
- Tailwind CSS with CSS-first configuration
- TypeScript support
- React components showcasing squircle usage
- Optimized Next.js Image components with squircle clipping

**Quick Start:**
```bash
cd examples/nextjs
npm install
npm run dev
# Visit http://localhost:3000
```

## Requirements

- Tailwind CSS 4.x
- Modern browser with CSS `clip-path` or `mask` support

## License

MIT