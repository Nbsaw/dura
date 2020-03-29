const workFieldGen = (title: string, desc: string) => ({ title, desc });

const product = [
  workFieldGen(
    '慢钱财富官网',
    '大财需慢理。慢钱的经营哲学。使用NUXT构建项目。用StoryBook管理组件。使用Lottie来处理复杂的动画特效。'
  )
];

const personal = [
  // 工程
  workFieldGen('Notes', '个人博客记录了前端开发的一些坑，笔记'),
  workFieldGen('Meteorite', '现在在用的博客'),
  workFieldGen('VIVA', '在写的编辑器'),
  // CLI 工具
  workFieldGen('script-list', '获取pacakge.json的命令并输出点击即可执行'),
  workFieldGen('kiracli', '根据git的url把对应的git项目当做模板载到当前目录'),
  // 效率提升
  // 服务
  workFieldGen('Npass', '类似One-pass的东西')
];

const prs = [
  workFieldGen(
    'Lodash',
    'A modern JavaScript utility library delivering modularity, performance, & extras. '
  ),
  workFieldGen('Redux', 'Predictable state container for JavaScript apps'),
  workFieldGen(
    'Blade',
    'Simple elegant, high-performance full-stack web framework'
  )
];

const works = [
  {
    type: '公司项目',
    works: product
  },
  {
    type: '个人作品',
    works: personal
  },
  {
    type: '开源贡献',
    works: prs
  }
];

export default works;
