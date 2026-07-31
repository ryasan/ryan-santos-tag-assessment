# Third and Grove — Best Sellers Assessment

A "Best Sellers" product carousel built from the TAG front-end assessment Figma file.

## Live demo

https://ryan-santos-tag-assessment.vercel.app/

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal.

## Stack

- React + Vite (plain JSX)
- Plain CSS (BEM) with design tokens in `src/styles/global.css`
- Embla Carousel for drag/swipe

## Structure

```
src/
  components/
    best-sellers.jsx          # Section header + Embla carousel
    best-sellers.css
    product-card.jsx          # Individual product tile
    product-card.css
  data/
    products.js               # Mock product data
  styles/
    global.css                # Tokens, resets, page shell
  main.jsx
```
