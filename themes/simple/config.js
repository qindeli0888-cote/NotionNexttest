const CONFIG = {
  // Lily OS 首页。这里只控制公开网站的展示，不写入或修改 Notion 文章库。
  LILY_OS_TITLE: process.env.NEXT_PUBLIC_LILY_OS_TITLE || 'Lily‘s OS',
  LILY_OS_SUBTITLE:
    process.env.NEXT_PUBLIC_LILY_OS_SUBTITLE ||
    'AI创作 · 项目管理 · 作品沉淀 · 知识系统',
  LILY_OS_NAVIGATION: [
    {
      icon: '🔥',
      title: 'Active Projects',
      description: '当下最重要的项目',
      href: '#active-projects'
    },
    {
      icon: '🎬',
      title: 'Works',
      description: '作品与创作案例',
      href: '#latest-work'
    },
    {
      icon: '🧠',
      title: 'AI Skills',
      description: '工具、方法与工作流',
      href: '/search?s=AI'
    },
    {
      icon: '📡',
      title: 'AI Systems',
      description: '自动化与长期系统',
      href: '/search?s=AI%20System'
    },
    {
      icon: '📚',
      title: 'Knowledge',
      description: '文章、笔记与沉淀',
      href: '/archive'
    },
    {
      icon: '📥',
      title: 'Inbox',
      description: '灵感与待整理事项',
      href: '/search'
    }
  ],
  SIMPLE_LOGO_IMG: '/Logo.webp',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION:
    process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION ||
    '<div>编程爱好者<br/>/互联网从业者<br/>/知识分享博主</div>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE:
    process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面

  SIMPLE_ARTICLE_RECOMMEND_POSTS:
    process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}
export default CONFIG
