/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '欢迎来到高颢嘉的个人网站，点击任意位置进入', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: '颢见万象，嘉行智途', // 英雄区文字
    PROXIO_HERO_TITLE_2: 'Vision the Cosmos, Navigate Intelligence.', // 英雄区文字
    PROXIO_HERO_TITLE_3: '向下滚动，探索更多', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: '与我建立联系', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'mailto:me@gaohaojia.top', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/gaohaojia', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '学术论文',
    PROXIO_BLOG_COUNT: 2, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: '我的最新动态',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: false, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: false, // 特性区块开关
    PROXIO_FEATURE_TITLE: '为什么选我',
    PROXIO_FEATURE_TEXT_1: '我能让您的项目焕发光彩',
    PROXIO_FEATURE_TEXT_2:
        '丰富的案例经验，专业的技术服务，优质的沟通效率',

    // 特性1
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
    PROXIO_FEATURE_1_TEXT_1: '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '协作式流程',
    PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '细节把控',
    PROXIO_FEATURE_3_TEXT_1: '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

    PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: '生涯',
    PROXIO_CAREER_TEXT:
        '以下是我的个人生涯',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: '东莞市零态矩阵机器人有限责任公司', bio: '合伙创始人、CTO', text: '从2024年至今，负责公司的产品研发、运营、市场推广等工作。' },
        { title: '每刻深思智能科技（北京）有限责任公司', bio: '机器人研发部实习生', text: '从2024年至今，负责公司机器人算法的设计、开发、调试和测试。' },
        { title: '北京工业大学 PIP 战队（RoboMaster）', bio: '战队队长', text: '于2024赛季和2025赛季担任该战队队长，作为该战队目前唯一一个担任两个赛季的队长，带领战队参与全国大学生 RoboMaster 机器人竞赛，拿下多个国家级奖项。' },
        { title: '北京工业大学 P-BotClub 青年工程师协会', bio: '创立人', text: '于2023年创立北京工业大学 P-BotClub 青年工程师协会（社团），致力于促进青年人才的成长，推动科技创新。' },
        { title: '北京工业大学 樊恭烋荣誉学院', bio: '本科', text: '2022年9月入学，预计2026年毕业，为 211、双一流学校，入学后二次选拔学院，人工智能专业。' },
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: false, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '用户反馈',
    PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
    PROXIO_TESTIMONIALS_TEXT_2:
        '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: 'mailto:me@gaohaojia.top',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: false, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: 'NotionNext有帮助文档吗？', a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署' },
        { q: '部署后要如何编写文章？', a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>' },
        { q: '站点部署失败，更新失败？', a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助' },
        { q: '文章没有实时同步？', a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '高颢嘉',
    PROXIO_ABOUT_TEXT_1: '一个渴望借助机器人探索宇宙的 Coder',
    PROXIO_ABOUT_TEXT_2:
        '本人聚焦参与机器人学、计算机视觉和具身智能等相关领域的研究工作，并在实践中积累了一定的科研与工程经验。',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.jpg',
    PROXIO_ABOUT_KEY_1: '一作发表论文',
    PROXIO_ABOUT_VAL_1: '2篇',
    PROXIO_ABOUT_KEY_2: '一作在投论文',
    PROXIO_ABOUT_VAL_2: '4篇',
    PROXIO_ABOUT_KEY_3: '第一发明人专利',
    PROXIO_ABOUT_VAL_3: '1项',
    PROXIO_ABOUT_KEY_4: '国家级奖项',
    PROXIO_ABOUT_VAL_4: '10项',

    PROXIO_ABOUT_BUTTON_URL: 'https://aboutme.gaohaojia.top',
    PROXIO_ABOUT_BUTTON_TEXT: '关于我',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'Robotics',
        'Computer Vision',
        'Neural Networks',
        'Deep Learning',
        'Embodied AI',
    ],

    PROXIO_FOOTER_SLOGAN: '颢见万象，嘉行智途。',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        // {
        //     name: '友情链接',
        //     menus: [
        //         {
        //             title: 'Tangly的学习笔记',
        //             href: 'https://blog.tangly1024.com'
        //         },
        //         {
        //             title: 'NotionNext',
        //             href: 'https://www.tangly1024.com'
        //         }
        //     ]
        // },
        // {
        //     name: '其它链接',
        //     menus: [
        //         // { title: 'Github', href: 'https://github.com/gaohaojia' },
        //         // {
        //         //     title: 'Google Scholar',
        //         //     href: 'https://scholar.google.com/citations?user=EzzD3tAAAAAJ'
        //         // },
        //         // {
        //         //     title: 'ORCID',
        //         //     href: 'http://orcid.org/0009-0004-5415-5945'
        //         // },
        //         // {
        //         //     title: '技术讨论',
        //         //     href: 'https://github.com/tangly1024/NotionNext/discussions'
        //         // },
        //         // {
        //         //     title: '关于作者',
        //         //     href: 'https://blog.tangly1024.com/about'
        //         // }
        //     ]
        // }
        ],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
    PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
    PROXIO_404_BACK: '回到主页',

    // 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: false,
    PROXIO_CTA_TITLE: '与我建立联系',
    PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
    PROXIO_CTA_DESCRIPTION:
        '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/about',
    PROXIO_CTA_BUTTON_TEXT: '联系我',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://www.gaohaojia.top', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
