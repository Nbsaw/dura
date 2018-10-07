const workFieldGen = (title, desc) => ({ title, desc });

const product = [
  workFieldGen(
    '慢钱财富官网',
    '大财需慢理。慢钱的经营哲学。使用NUXT构建项目。用StoryBook管理组件。使用Lottie来处理复杂的动画特效。'
  ),
  workFieldGen(
    '小智LOGO',
    '小智LOGO是公司主推的产品。后端采用人工智能设计生成用户所需要的LOGO，公司是分布式的架构，该项目一直在重构中，旧的主站采用了Avalon和Jquery正在一步步更替，新的页面采用了React+Styled-Component开发。因为是LOGO设计网站会涉及到合成VI图，打包下载资源等功能。'
  ),
  workFieldGen(
    '小智起名',
    '使用LOGO网站沉淀下来的百万个公司名字进行机器学习，生成有意义的公司名字，为有需求的客户生成公司名字。使用XZ-Design搭建基本的页面组件，采用了Styled-Component作为CSS类库，复杂的动画配合设计使用了airbnb的lottie-web完成。',
    ['React', 'Redux', 'Lodash']
  ),
  workFieldGen(
    '维智高端品牌设计',
    '制定和维护编码风格和组件规范，首个正式采用XZ-Designd的项目，良好的响应式设计，在Web,Mobile端都可以很好地适配。采用了React-Slick来做轮播效果。React-Anchor来做平滑的锚点滚动。'
  ),
  workFieldGen('深南支行-内部官网', '负责修改整体的细节和模块的移除修改。'),
  workFieldGen('内部留言系统', '银行内部成员使用的留言系统'),
];

const personal = [
  workFieldGen('Notes', '个人博客记录了前端开发的一些坑，笔记'),
  workFieldGen('Ruka', 'Está poderosa, media escandalosa'),
  workFieldGen('Pyfl', '获取汉字拼音缩写'),
  workFieldGen('Resume', '在线的个人简历'),
  workFieldGen(
    'Dashboard',
    '后台管理模板。基于Vue开发。使用了AMAP和Chart.js绘制地图和图表。'
  ),
  workFieldGen('WeChat_Cnode', '使用微信小程序开发的Cnode客户端'),
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
  ),
];

const works = [
  {
    type: '公司项目',
    works: product,
  },
  {
    type: '个人作品',
    works: personal,
  },
  {
    type: '开源贡献',
    works: prs,
  },
];

export default works;
