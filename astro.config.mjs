import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import process from 'node:process';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://fernando-playable-portfolio.chic-dill-1128.chatgpt.site',
  output: 'static',
  integrations: [mdx(), react(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('phaser')) return 'phaser-game';
          },
        },
      },
    },
  },
});
