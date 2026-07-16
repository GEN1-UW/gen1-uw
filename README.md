# GEN1 at UW CSE

This repository contains the website for GEN1, a student organization at the University of Washington’s Paul G. Allen School of Computer Science & Engineering. The site highlights the group’s mission, leadership, events, resources, and ways to connect with the community.

## Overview

The app is a React and TypeScript site built with Vite, Tailwind CSS, and shadcn/ui. It includes a responsive landing page plus dedicated pages for:

- About
- Events
- Resources
- Leadership
- Contact

## Tech stack

- Vite
- React 18
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui and Radix UI
- Supabase client
- Vitest and Testing Library

## Local development

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file from the example:

```bash
copy .env.example .env
```

4. Fill in the required environment variables:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

5. Start the development server:

```bash
npm run dev
```

## Available scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run the test suite
- `npm run test:watch` — run Vitest in watch mode

## Project structure

- `src/pages` — route-level pages such as Home, About, Resources, and Contact
- `src/components` — reusable UI sections and layout components
- `src/lib` — shared libraries and client setup
- `src/types` — shared TypeScript types

## Deployment

This project can be deployed to any static hosting provider that supports Vite builds, such as Vercel, Netlify, or GitHub Pages. A production build is generated with:

```bash
npm run build
```
