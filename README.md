# Nike Store

Single-page Nike storefront built with React, Vite, and Tailwind CSS as a training project to practice Tailwind utility-first styling.

## Overview
- Landing page sections include hero with swap-able shoe gallery, popular products grid, service highlights, special offers, customer reviews, newsletter signup, and footer.
- Data-driven UI: navigation, product cards, services, and reviews pull from `src/constants/index.js`.
- Responsive layout using Tailwind with custom theme tokens for fonts, colors, shadows, and background illustrations from `src/assets`.
- Reusable UI pieces such as `Button`, `ShoeCard`, `ProductsCard`, `ServiceCard`, and `ReviewCard` keep styling consistent.

## Tech Stack
- React 18 + Vite 4
- Tailwind CSS 3 with custom theme extensions (`tailwind.config.js`) and helper utilities (`src/index.css`)
- ESLint with React plugins for linting

## Getting Started
1) Install dependencies: `npm install`
2) Run the dev server: `npm run dev`
3) Build for production: `npm run build`
4) Preview the production build locally: `npm run preview`

## Project Structure
- `src/App.jsx`: Composes all landing page sections.
- `src/components/`: Presentational components (hero, products, services, offers, reviews, subscribe, footer, etc.).
- `src/constants/index.js`: Static data for navigation, catalog items, services, reviews, and footer links.
- `src/assets/`: Images and icons referenced by components and Tailwind background utilities.
- `src/index.css`: Global resets plus Tailwind component/utility layers for shared spacings and inputs.
- `tailwind.config.js`: Theme customization (fonts, colors, shadows, background images, and breakpoints).

## Tailwind Training Notes
- Utility layers define shared spacing helpers (`padding`, `padding-x`, `padding-y`, etc.) and an `input` style used in the subscribe form.
- Custom fonts (`Palanquin`, `Montserrat`), brand colors, and background images (`bg-hero`, `bg-card`) live in the Tailwind theme extensions.
- Components rely on Tailwind for layout and interactivity (hover/focus states on buttons, responsive flex/grid arrangements, background image sections).
