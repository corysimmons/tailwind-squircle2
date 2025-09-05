# Tailwind Squircle Plugin

A Tailwind CSS plugin for creating squircle (superellipse) shapes.

## Installation

```bash
npm install tailwind-squircle2
```

## Usage

```css
@import "tailwindcss";
@import "tailwind-squircle2/css";
```

## Classes

- `squircle-round` - Very rounded
- `squircle` - Perfect balance 
- `squircle-soft` - Softer corners
- `squircle-sharp` - More square-like

Each class also has a `-mask` variant for better browser support.

## Example

```html
<div class="squircle bg-blue-500 w-24 h-24"></div>
<button class="squircle-round bg-green-500 px-6 py-3 text-white">
  Click me
</button>
```

## Examples

- **Next.js:** `npm run example:nextjs` 
- **Vite:** `npm run example:vite`

## Requirements

- Tailwind CSS 4.x

## License

MIT