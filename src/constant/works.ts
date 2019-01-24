const workFieldGen = (title: string, desc: string) => ({ title, desc });

const product = [
  workFieldGen(
    '慢钱财富官网',
    '大财需慢理。慢钱的经营哲学。使用NUXT构建项目。用StoryBook管理组件。使用Lottie来处理复杂的动画特效。'
  )
];

const personal = [
  workFieldGen('Notes', '个人博客记录了前端开发的一些坑，笔记')
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
