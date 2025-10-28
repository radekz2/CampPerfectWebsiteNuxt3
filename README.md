# Camp Perfect Checklist - Marketing Website

A Nuxt 3-based static marketing site for the Camp Perfect Checklist mobile app.

## Overview

This is a single-page marketing website showcasing the features of Camp Perfect Checklist, a privacy-first camping checklist mobile app. The site is statically generated using Nuxt 3 and hosted on Netlify.

## Features

- **Single Landing Page**: All content on one page with anchor navigation
- **Static Site Generation (SSG)**: Pre-rendered for optimal performance
- **Mobile Responsive**: Fully responsive design for all devices
- **Brand Consistent**: Uses app's brand colors and logo
- **Netlify Ready**: Configured for automatic deployment

## Brand Colors

- Primary Green: `#2e7d32`
- Dark Green: `#1b5e20`
- Light Green: `#66bb6a`

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The site will automatically reload when you make changes to the code.

## Build for Production

Generate the static site:

```bash
npm run generate
```

This creates a `.output/public` directory with the static HTML, CSS, and JavaScript files ready for deployment.

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The site is configured for automatic deployment to Netlify:

- **Build Command**: `npx nuxi generate`
- **Publish Directory**: `.output/public`

The `netlify.toml` file contains the deployment configuration.

## Project Structure

```
.
├── app/
│   └── app.vue           # Main landing page component
├── public/
│   └── images/
│       └── camp-perfect-logo.svg  # App logo
├── nuxt.config.ts        # Nuxt configuration
├── netlify.toml          # Netlify deployment config
└── package.json          # Dependencies
```

## Technologies

- **Nuxt 3**: Vue.js framework for SSG
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe development
- **Netlify**: Hosting and deployment

## Live App

View the Camp Perfect Checklist app: [https://campperfectchecklist.netlify.app/tabs/tabpack](https://campperfectchecklist.netlify.app/tabs/tabpack)

## License

All rights reserved.
