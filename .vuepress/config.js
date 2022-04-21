module.exports = {
  //顶部
  title: "Xin 的笔记本",
  description: "追赶时间。。。",

  head: require('./scripts/head'),
  plugins: require('./scripts/plugins'),
  theme: "reco",
  themeConfig: {
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    //评论组件
    valineConfig: {
      appId: 'cxPSbJA9SE1uXWt0ywBRl0Cr-gzGzoHsz',// your appId
      appKey: 'jKPdKyf3rUlfcVV03gPyBSd1', // your appKey
    },
    nav: require('./scripts/navbar'),
    sidebar: require('./scripts/sidebar'),
    type: "blog",
    blogConfig: require('./scripts/blog'),
    //friendLink: require('./scripts/friendLinks'),
    
    //以下配置需放在底部才生效
    dest: "public",
    logo: "/images/s.png",
    search: true,//启用搜索
    searchMaxSuggestions: 10,
    author: "SongXinXin",//作者
    authorAvatar: "/images/hejiu.jpg",//头像
    record: "豫ICP备2021036390号",
    recordLink:"https://beian.miit.gov.cn/#/Integrated/recordQuery",
    startYear: "2022"
  },
  markdown: {
    lineNumbers: true
  },
}