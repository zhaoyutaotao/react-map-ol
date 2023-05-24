import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-map-ol/',
  publicPath: '/react-map-ol/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-map-ol', // 网站名称
    logo: '', // 网站logo
    nav: [
      { title: 'Blog', link: '/guide' },
      { title: '组件', link: '/components/foo' },
    ],
    footer: false,
  },
});
