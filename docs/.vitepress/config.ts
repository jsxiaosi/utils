import type { UserConfig } from 'vitepress';

import { mdPlugin } from './config/plugins';
import { sidebar } from './config/navigation';

import nav from './navigation/nav.json';

const config: UserConfig = {
  lang: 'zh-CN',
  title: '@jsxiaosi/utils',
  description: 'Just playing around.',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/pwa/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/pwa/favicon.ico',
        type: 'image/png',
        size: '16x16',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/pwa/apple-touch-icon.png',
        size: '180x180',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/pwa/favicon.svg',
        color: '#FFFFFF',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'script',
      {
        src: '/registerSW.js',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@jsxiaosi/utils',
      },
    ],
  ],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/jsxiaosi/utils/tree/main/docs/:path',
      text: '编辑此页面',
    },
    logo: '/logo2.png',
    logoSmall: '/pwa/favicon-32x32.png',
    // 展示搜索框
    // algolia: {
    //   appKey: '',
    //   indexName: '',
    //   searchParameters: {
    //     faeFilters: ['tags:guide,api'],
    //   },
    // },
    socialLinks: [{ icon: 'github', link: 'https://github.com/jsxiaosi/utils' }],
    // 顶部标题栏
    nav,
    // 侧边栏
    sidebar,
  },
  markdown: {
    config: (md: markdownit) => mdPlugin(md),
  },
};

export default config;
