import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-map-ol/',
  publicPath: '/react-map-ol/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-map-ol', // 网站名称
    logo: '', // 网站logo
    nav: [
      { title: 'Blog', link: '/api/map' },
      { title: '组件', link: '/components/foo' },
    ],
    footer: false,
    socialLinks: {
      github: 'https://github.com/zhaoyutaotao/react-map-ol.git',
    },
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
});
