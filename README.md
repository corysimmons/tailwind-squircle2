# Tailwind Squircle Plugin

A Tailwind CSS plugin that adds squircle (superellipse) utilities using SVG clip paths and the superellipse algorithm.

## What are Squircles?

Squircles are shapes that sit between squares and circles, created using the superellipse mathematical formula. They provide a modern, smooth aesthetic that's popular in contemporary UI design, especially in mobile interfaces and modern web applications.

## Installation

```bash
npm install tailwind-squircle2
```

Add the plugin to your `tailwind.config.js`:

```javascript
module.exports = {
  plugins: [
    require('tailwind-squircle2')
  ]
}
```

## Usage

The plugin provides several squircle variations as utility classes:

### Clip Path Utilities

- `.squircle-sharp` - Sharp squircle (n=3, more square-like)
- `.squircle` - Perfect squircle (n=4, balanced)
- `.squircle-soft` - Soft squircle (n=6, rounded corners)
- `.squircle-round` - Very rounded squircle (n=8, very rounded)

### Mask Utilities (Alternative)

For better browser compatibility or different behavior:

- `.squircle-sharp-mask`
- `.squircle-mask`
- `.squircle-soft-mask`
- `.squircle-round-mask`

## Examples

### Basic Usage

```html
<div class="squircle bg-blue-500 w-32 h-32"></div>
<div class="squircle-soft bg-green-500 w-32 h-32"></div>
```

### Card Components

```html
<div class="squircle bg-white p-6 shadow-lg">
  <h3>Card Title</h3>
  <p>Card content with squircle shape</p>
</div>
```

### Buttons

```html
<button class="squircle bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
  Squircle Button
</button>
```

### Profile Images

```html
<div class="squircle w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500"></div>
```

## Technical Details

The plugin uses the superellipse (Lamé curve) formula in parametric form:

```
x = sign(cos(t)) × |cos(t)|^(2/n)
y = sign(sin(t)) × |sin(t)|^(2/n)
```

Where `n` controls the shape:
- **n = 2**: Circle/Ellipse
- **n = 3**: Sharp squircle (more square-like)
- **n = 4**: Perfect squircle (balanced)
- **n = 6**: Soft squircle (rounded corners)
- **n = 8**: Very rounded squircle
- **n → ∞**: Square

## Browser Support

- **Clip-path utilities**: Modern browsers (Chrome 55+, Firefox 54+, Safari 13.1+)
- **Mask utilities**: Wider browser support including older versions

## Demo

Open `demo.html` in your browser to see all the examples and variations in action.

## License

MIT