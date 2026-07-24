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
- shadcn/ui and Radix UI
- Supabase client
- Vitest and Testing Library

## Local development

### 1) Clone the repository

```bash
git clone <your-repository-url>
cd gen1-uw
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create a local environment file

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

On macOS or Linux:

```bash
cp .env.example .env
```

### 4) Add required environment variables

Edit the new `.env` file and provide your Supabase values:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 5) Start the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically `http://localhost:5173`.

### 6) Useful follow-up commands

```bash
npm run build
npm run preview
npm run lint
npm run test
npm run test:watch
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

Thank you to everyone contributing to GEN1 and helping support first-generation students in the UW CSE community.
