module.exports={
  // 站点配置
  lang: 'zh-CN',
  title: '宋鑫鑫的个人博客',
  description: 'Just do it!',
  port: 8080,
  //自定义标签页图标
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/s.png',
    //导航栏
    navbar: require('./script/navbar'),
    lastUpdatedText:'上次更新',
    contributorsText:'贡献者',
    backToHome:'返回首页',
    editLink: false,//关闭编辑此页
    //仓库地址
    repo: 'https://gitee.com/goodsxx/my-vuepress',
  },
}