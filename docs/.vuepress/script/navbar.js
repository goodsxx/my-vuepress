module.exports = [
  {
    text: '关于本站',
    link: '/guanyubz.md',
    activeMatch: '^/guanyubz',
    // target: '_blank',
    // rel: 'noopener noreferrer',
  },
  {
    text: '前端',
    children: [
      {
        text: 'vue',
        link: '/qianduan/vue.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/qianduan/vue',
      },
    ],
  },
  {
    text: '后端',
    children: [
      {
        text: 'Asp.Net.md',
        link: '/houduan/Asp.Net.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/houduan/Asp.Net',
      },
    ],
  },
    // 嵌套 Group - 最大深度为 2
  {
    text: '其他',
    children: [
      {
        text: '笔记本',
        children: [
          {
            text: '笔记',
            link: '/qita/biji/biji.md',
            activeMatch: '^/qita/biji/biji',
          }
        ],
      },
    ],
  }
]