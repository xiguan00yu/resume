import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false,
  },
  profile: {
    name: 'LINKER',
    email: '949734824@qq.com',
    mobile: '18814383179',
    github: 'https://github.com/xiguan00yu',
    zhihu: '',
    workExpYear: '5 year',
    workPlace: '广东深圳',
    positionTitle: '前端工程师/软件工程师',
  },
  educationList: [
    {
      edu_time: ['2014.09.01', '2018.06.30'],
      school: '嘉应学院',
      major: '计算机科学与技术',
      academic_degree: '本科',
    },
  ],
  awardList: [
    // ...
  ],
  workExpList: [
    {
      company_name: '桨歌（深圳）科技有限公司',
      department_name: '高级软件工程师',
      work_time: ['2021.07', '2021.10'],
      work_desc: `1. 维护JungleScout Chrome插件\n2. 开发新的网页解析器\n3. 参与设计公司数据飞轮核心功能\n4. 熟练运用aws cdk工具，搭建项目服务、项目自动部署等\n5. 在职期间\n    1） 重构JungleScout Chrome 插件部分功能 \n    2）从零掌握 aws cloud 开发并熟练运用在数据项目\n    3）设计自定义化网页解析器\n    4）软件工程师 升职 高级软件工程师 ⬆️`,
    },
    {
      company_name: '中电文思海辉',
      department_name: '前端开发工程师',
      work_time: ['2020.08', '2021.07'],
      work_desc:
        '1. 负责开发与维护管理后台\n2. 优化网页性能, 项目结构\n3. 在职期间\n    1）优化项目数据管理\n    2）重构部分过旧页面',
    },
    {
      company_name: '网飞翔网络科技有限公司',
      department_name: '前端开发工程师',
      work_time: ['2018.10', '2020.07'],
      work_desc:
        '1. 工作内容围绕JavaScript技术栈，Web开发(ReactJS)、Mobile开发(React-Native)、后台管理系统(ReactJS)、服务端(NodeJS)\n2. Web，Admin 开发负责工作有：页面开发，整体架构重构，优化等\n3. 移动端开发负责工作有： 组件开发，处理适配问题，业务逻辑处理\n4. 服务端开发参与较少，偶尔也会写一些接口逻辑',
    },
  ],
  skillList: [
    {
      skill_name: 'TypeScript / JavaScript',
      skill_level: 90,
    },
    {
      skill_name: 'React / 前端工程化',
      skill_level: 90,
    },
    {
      skill_name: 'Aws Cloud',
      skill_level: 80,
    },
    {
      skill_name: 'Python',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: '数据飞轮',
      project_role: '开发工程师',
      project_time: '2022.07 - 2022.10',
      project_desc: '公司核心业务数据处理流程',
      project_content: `
        1. 项目核心是确保数据流按照业务定制化时间运行
        2. 项目分成六个部分
          1). 数据输入: 来自客户端订阅数据ID，集中流入数据设定
          2). 数据设定: 根据数据类型设置数据处理时间，流入时间分区仓库
          3). 数据提取: 在时间分区仓库，根据当前时间获取位于时间区数据ID列表
          4). 数据处理: 批量处理数据ID，获取对应数据内容，存储到数据仓库 
          5). 数据回流: 已被处理数据ID 将重新流回数据设定`,
    },
    {
      project_name: '自定义化网页解析器',
      project_role: '设计&开发工程师',
      project_time: '2021.12 - 2022.03',
      project_desc: '公司数据处理流中需要网页数据源进行定制化解析',
      project_content: `
        1. 项目是网页信息解析器，npm package
        2. 解析器将利用远端配置文件，解析网页元素信息，从而做到数据获取可控性
        3. 监控数据点，提前预警数据异常`,
    },
    {
      project_name: 'Amazon FBA fee 计算器',
      project_role: '设计&开发工程师',
      project_time: '2021.07 - 2021.11',
      project_desc: '根据Amazon FBA规则设计一款fee计算器',
      project_content: `
        1. 项目完成亚马逊FBA计算器功能
        2. 设计FBA计算规则数据结构
        3. 设计FBA计算算法 
        4. 大量数据同步计算，得到算法准确率 95%`,
    },
  ],
  workList: [
    // TODO
  ],
  aboutme: {
    aboutme_desc: `一名计算机专业IT男，近期工作为高级软件工程师，主要是javascript技术栈，工作内容涉及网页开发(REACT)、服务端开发(nodejs)、aws cloud(CDK)、python 脚本开发，熟悉 aws 产品(ECS、Kinesis)，熟悉常用的监控系统(Datadog)，熟悉DevOps 常用工具链，熟悉MacOS开发和编程，自学习以来一直紧跟前沿技术，注重代码质量和多方面的技术开发。`,
  },
};
