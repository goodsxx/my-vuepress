import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '宋鑫鑫的学习笔记',
  description: 'Just do it!',
  port: 8080,

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/s.png',
    //导航栏
    navbar: [
      // 控制元素何时被激活
      {
        text: '关于本站',
        link: '/关于本站.md',
      },
      {
        text: '前端',
        children: [
          {
            text: 'vue.md',
            link: '/前端/vue.md',
            // 该元素将一直处于激活状态
            activeMatch: '/前端/vue.md',
          },
        ],
      },
      {
        text: '后端',
        children: [
          {
            text: 'Asp.Net.md',
            link: '/后端/Asp.Net.md',
            // 该元素将一直处于激活状态
            activeMatch: '/后端/Asp.Net.md',
          },
        ],
      },
      // 嵌套 Group - 最大深度为 2
      {
        text: '其他',
        children: [
          {
            text: '笔记',
            children: ['/其他/笔记/笔记.md'],
          },
        ],
      }
    ],
    //仓库地址
    repo: 'https://gitee.com/goodsxx/my-vuepress',
  },
})