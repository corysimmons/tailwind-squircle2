# Tailwind Squircle Plugin - Next.js Example

This is a Next.js example demonstrating how to use the Tailwind Squircle Plugin with Tailwind CSS 4.

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
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## What's Included

This example showcases:

- **Squircle Variations:** Different squircle shapes with varying roundness
- **Card Components:** Modern cards using squircle clipping
- **Button Styles:** Interactive buttons with squircle shapes
- **Profile Images:** Clipped profile images in squircle format
- **Shape Comparisons:** Visual comparison between squares, rounded rectangles, squircles, and circles

## Configuration

The plugin uses Tailwind CSS CSS-first approach in `src/app/globals.css`:

```css
@import "tailwindcss";
@import "tailwind-squircle2/css";
```

## Available Classes

- `squircle-round` - Very rounded (n=3)
- `squircle` - Perfect balance (n=4) 
- `squircle-soft` - Softer corners (n=6)
- `squircle-sharp` - More square-like (n=8)

Each class also has a `-mask` variant for alternative browser support.

## Learn More

- [Tailwind Squircle Plugin Repository](https://github.com/corysimmons/tailwind-squircle2)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
