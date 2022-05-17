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
          text: "Linux系列",
          link: "/docs/linux/"
        },
        {
          text: "微服务系列",
          link: "/docs/micro-service/"
        },
        {
          text: "设计模式",
          link: "/docs/design-pattern/"
        },
        {
          text: "其他",
          link: "/docs/others/"
        }
      ]
    },
    {
      text: "时间线",
      link: "/timeline/",
      icon: "reco-date"
    },
    {
      text: "留言板",
      link: "/docs/message/",
      icon: "reco-suggestion"
    },
    {
      text: "Gitee",
      icon: "reco-mayun",
      link: "https://gitee.com/goodsxx/my-vuepress",
    }
  ]