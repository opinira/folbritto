import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://opinira.github.io',
  base: '/folbritto',
  output: 'static',
  build: {
    format: 'directory'
  }
});

