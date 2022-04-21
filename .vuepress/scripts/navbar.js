//导航栏
module.exports=[
    {
      text: "首页",
      link: "/",
      icon: "reco-home"
    },
    {
      text: "本站指南",
      link: "/docs/about-this-website/",
      icon: "reco-coding"
    },
    {
      text: "文档",
      icon: "reco-document",
      items: [
        {
          text: "微服务系列",
          link: "/docs/micro-service/"
        },
        // {
        //   text: "vuepress-reco",
        //   link: "/docs/theme-reco/"
        // }
      ]
    },
    {
      text: "时间线",
      link: "/timeline/",
      icon: "reco-date"
    },
    {
      text: "Gitee",
      icon: "reco-mayun",
      link: "https://gitee.com/goodsxx/my-vuepress",
    }
  ]