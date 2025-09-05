# Tailwind Squircle Plugin - Vite Example

This is a Vite example demonstrating how to use the Tailwind Squircle Plugin with Tailwind CSS 4 in a vanilla JavaScript project.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173) to see the result.

## What's Included

This example showcases:

- **Squircle Variations:** Different squircle shapes with varying roundness
- **Card Components:** Modern cards using squircle clipping
- **Button Styles:** Interactive buttons with squircle shapes
- **Profile Images:** Avatar-style elements in squircle format
- **Shape Comparisons:** Visual comparison between squares, rounded rectangles, squircles, and circles

## Configuration

The plugin uses Tailwind CSS CSS-first approach in `src/style.css`:

```css
@import "tailwindcss";
@import "tailwind-squircle2/css";
```

PostCSS configuration in `postcss.config.js`:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

## Available Classes

- `squircle-round` - Very rounded (n=3)
- `squircle` - Perfect balance (n=4) 
- `squircle-soft` - Softer corners (n=6)
- `squircle-sharp` - More square-like (n=8)

Each class also has a `-mask` variant for alternative browser support.

## Project Structure

```
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
└── src/
    ├── main.js         # JavaScript entry point with demo content
    └── style.css       # Tailwind and squircle imports
```

## Learn More

- [Tailwind Squircle Plugin Repository](https://github.com/corysimmons/tailwind-squircle2)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)