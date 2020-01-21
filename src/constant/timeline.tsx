import React, { ReactElement } from 'react';
import { Icon } from 'antd';

interface TimelineType {
  [index: string]: {
    text: string;
    dot?: ReactElement<any>;
    color?: string;
  }[];
}

const Timeline: TimelineType = {
  2020: [
    {
      text: '01月21日 嗨，今天还在上班啊啊啊啊 还有两天 马上新的一年了哦 !'
    },
    {
      text: '01月20日 丢四天没背单词了'
    },
    {
      text: '01月19日 钱没有 又多了一张浦发银行的银行卡'
    },
    {
      text: '01月17日 Leetcode 刷了57题了 目标是100题 冲呀  ！！'
    },
    {
      text:
        '01月01日 又开始天天背单词了 丢雷楼某 今年还是许愿脱单 有几个里程碑已经快达到了 奥利给'
    }
  ],
  2019: [
    {
      text: '11月02日 看了天气之子呢'
    },
    {
      text: '09月xx日 去了趟广州玩 呜呜呜手机进水了 修了2k 妈蛋 又是一年的花呗'
    },
    {
      text: '09月18日 贵州到咯 ~'
    },
    {
      text: '09月13日 GO 重庆 !'
    },
    {
      text: '09月12日 大熊猫啊啊啊啊啊'
    },
    {
      text: '09月11日 上飞机咯 前往成都 !'
    },
    {
      text: '06月29日 又开始锻炼身体了这一次可以持续多久呢..'
    },
    {
      text: '06月06日 可恶马云爸爸居然给我支付宝涨额度了 因为我买了电脑吗 ...'
    },
    {
      text: '06月04日 拥有了人生的第一台MacBook Pro, 还是希望好好学习吧 '
    },
    {
      text: '04月15日 好像是今天来着拿到了驾照'
    },
    {
      text: '05月08日 生日快乐'
    },
    {
      text: '03月19日 重新开始吧'
    },
    {
      text: '02月xx日 搬了次家来着 还是在老地方附近'
    },
    {
      text: '01月23日 偷懒了很久又开始重构了起来 (00点15分)'
    },
    {
      text: '01月12日 去惠州开年会啦'
    },
    {
      text: '01月11日 开始使用typescript重构ruka'
    },
    {
      text: '01月10日 加班结束'
    },
    { text: '01月06日 有点无聊又开始写起了日记' }
  ],
  2018: [
    {
      text: '12月19日 开始疯狂加班'
    },
    {
      text: '12月17日 买的Iphone XsMax到了 新的白条开始了'
    },
    {
      text: '11月09日 鹿晗演唱会'
    },
    {
      dot: <Icon type="meh-o" style={{ color: 'orange' }} />,
      text: '10月05日 科目三挂科 ... 法克 ...'
    },
    {
      text: '09月15日 Dura更名为Ruka'
    },
    {
      text: '09月10日 科目二终于过了'
    },
    {
      dot: <Icon type="clock-circle-o" />,
      text: '08月01日 加入深圳市慢钱网络科技有限公司'
    },
    {
      dot: <Icon type="meh-o" style={{ color: 'orange' }} />,
      text: '07月27日 科目二考试失败 留下了没有技术的泪水'
    },
    {
      color: 'green',
      text: '06月04日 Dura项目启动'
    },
    {
      text: '03月24日 前往广州参加大疆校园招聘 (晚点了,变成了去广州玩)'
    },
    {
      text: '04月17日 法克耳机白条终于打完了 !! 表示再也不想打白条了 (真香)'
    },
    {
      text: '03月11日 第一次和朋友自驾游到大鹏玩'
    },
    {
      text:
        '02月28日 使用Trello作为看板 开始规划自己的目标 开始不停的想办法提高效率'
    },
    {
      text: '02月04日 和基友搬入宝安灵芝 开启自己在外面住的生活'
    }
  ],
  2017: [
    {
      text: '12月16日 嗯搬家了'
    },
    {
      dot: <Icon type="clock-circle-o" style={{ color: 'red' }} />,
      text: '08月30日 中国银行深南支行实习结束'
    },
    {
      dot: <Icon type="clock-circle-o" />,
      text: '07月01日 前往中国银行深南支行实习'
    },
    {
      text: '07月15日 购买一加三手机 用到眼睛差点瞎掉 发誓一定要买一部Iphone'
    },
    {
      text: '06月11日 开始使用Github Issues写博客'
    },
    {
      text:
        '01月26日 加入人生的第一个Orgnazation: Balde / 发起了人生的第一个Pull Request 到Blade项目'
    }
  ],
  2016: [
    {
      text: '12月xx日 看了你的名字'
    },
    {
      text:
        '10月22日 博客启动 (这是能找到的最早的一条有效日期，虽然之前也在写博客)'
    },
    {
      text:
        '04月17日 购买了人生的第一条索尼耳机 充值一波信仰 打了人生第一次白条'
    },
    {
      dot: <Icon type="meh-o" style={{ color: 'orange' }} />,
      text: '03月xx日 胃病住院了 原因: 总是做嗨到最晚的男人'
    }
  ],
  2015: [
    { text: '09月16日 青岛旅游五天' },
    {
      text: '08月18日 广州一日游'
    },
    {
      text: '04月30日 拥有了自己的Acer笔记本,发誓要好好学习,结果打游戏打了个爽'
    },
    {
      text: '05月17日 加入Github'
    }
  ],
  2014: [
    {
      text: 'xx月xx日 反正是一个暑假 加入工作室'
    }
  ]
};

export default Timeline;
