import path from 'path';
import type { UserConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform';

export default (): UserConfig => {
  return {
    base: 'comdocs',
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, './.vitepress')}/`,
        },
        {
          find: 'xs-utils',
          replacement: `${path.resolve(__dirname, '../packages')}/index.ts`,
        },
      ],
    },
    server: {
      host: true,
    },
    plugins: [
      Inspect(), // only applies in dev mode
      MarkdownTransform(),
      DefineOptions(),
      VitePWA({
        includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'xs-utils',
          short_name: 'xs组件库模版',
          description: '基于 vue3+vitepress 搭建的后台模板',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
  };
};
