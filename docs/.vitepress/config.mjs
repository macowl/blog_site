import { defineConfig } from 'vitepress'

// 导入生成配置工具方法
import { getThemeConfig } from '@sugarat/theme/node'

// 主题独有配置，所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  author: '溪云',
  home: {
    name: "云隙拾笺",
    logo: '/dog.jpg',
    avatarMode: "card"
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云隙拾笺",
  description: "行到水穷处,坐看云起时",
  extends: blogTheme,
  author: '溪云',
  themeConfig: {
    outlineTitle: "目录", // ← 这一行！右侧大纲标题，替换 On this page
  }
})
