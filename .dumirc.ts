import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-map-ol/',
  publicPath: '/react-map-ol/',
  outputPath: 'docs-dist',
  locales: [
    { id: 'zh', name: '中文' },
    { id: 'en', name: 'English' },
  ],
  themeConfig: {
    name: 'react-map-ol', // 网站名称
    logo: '', // 网站logo
    siteUrl: {},
    showAntVProductsCard: false, // 是否显示 AntV 产品卡片
    // nav: [
    //   { title: '指南', link: '/guide' },
    //   { title: '组件', link: '/components/foo' } 有bug，点击其他二级导航，一级导航（组件）选择状态消失
    // ],
    footer: false,
    socialLinks: {
      github: 'https://github.com/zhaoyutaotao/react-map-ol.git',
    },
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
  mako: {},
});
