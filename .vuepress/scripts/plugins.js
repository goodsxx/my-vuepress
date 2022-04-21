//插件
module.exports=[
    //meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
    'autometa', {
        site: {
          name: 'Bravo Yeung',
          twitter: 'yanglr',
        },
        canonical_base: 'https://dbdgs.cn',
    },
    //添加sitemap https://github.com/ekoeryanto/vuepress-plugin-sitemap
    'sitemap', {
        hostname: "https://dbdgs.cn",
        // 排除无实际内容的页面
        exclude: ["/404.html"]
    },
    //增加feed https://github.com/webmasterish/vuepress-plugin-feed
    'feed',{
        canonical_base: 'https://webmasterish.com'
    },
    //自动推送到百度 https://github.com/IOriens/vuepress-plugin-baidu-autopush
    'vuepress-plugin-baidu-autopush',
]