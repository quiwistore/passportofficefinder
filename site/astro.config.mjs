import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://passportofficefinder.com',
  outDir: '../dist',
  build: { format: 'directory', inlineStylesheets: 'always' }
});
