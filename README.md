## Description

[![CI](https://github.com/GV79/portfolio-astro/actions/workflows/main.yml/badge.svg)](https://github.com/GV79/portfolio-astro/actions/workflows/main.yml)

This is the third iteration of my portfolio website now built using **[Astro](https://astro.build/)**. The legacy **Next.js** version of my portfolio website is hosted in the following GitHub Repo: https://github.com/GV79/portfolio-new.

The goal of this repo is to learn more about `Astro` and benefit from its HTML-first philosophy (i.e. increase performance and reduce bundle size by only shipping JS when it's necessary). Any components with more interactivity were built using **[Svelte](https://svelte.dev/)**. For managing content, this site uses **[Contentful](https://www.contentful.com/)**, a headless CMS.

## Getting Started

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run lint`         | Lint project with ESLint                         |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## In progress

**1. Reach 100% feature parity with existing Next.js portfolio site**

## Todos

1. Add Playwright e2e tests https://docs.astro.build/en/guides/testing/
2. Add GitHub actions (lint, type check, build, and run e2e tests)
3. Light/Dark Mode toggle + defaults via `prefers-color-scheme` setting
4. Add old chat, socsreynolds, mrflatbeds, and form builder projects + fix image sizes
5. Disabled buttons on featured projects page for mobile navs
6. Filter (fixed icon for filtering projects by technology)
7. Add simple animations/transitions?
8. Small date badges beside projects (top right of title)
9. Progressive web app for offline availability?
