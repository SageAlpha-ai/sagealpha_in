# SageAlpha - React Frontend

## Overview
A React + Vite + Tailwind CSS marketing/landing page website for SageAlpha, an AI consulting company.

## Tech Stack
- **Framework**: React 19 with React Router DOM
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Animations**: Framer Motion
- **3D**: Three.js with @react-three/fiber and @react-three/drei
- **Icons**: Lucide React

## Project Structure
- `src/pages/` - Page-level components (Home, Services, AgenticAI)
- `src/components/` - Reusable UI components
- `public/` - Static assets (images, SVGs, audio)

## Routes
- `/` — Home page
- `/services` — Services overview
- `/services/agentic-ai` — Agentic AI Solutions full product page (7 sections)

## Development
- Dev server runs on `0.0.0.0:5000`
- `npm run dev` - Start development server
- `npm run build` - Production build

## Configuration
- `vite.config.js` - Vite configuration (host: 0.0.0.0, port: 5000, allowedHosts: all)
- `tailwind.config.js` - Tailwind configuration
