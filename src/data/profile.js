// ============================================================
// 个人介绍数据
// 头像：已使用 E:\BaiduSyncdisk\作品集\_已整理素材\图片\人物-证件照\人物-证件照_0001.jpg
// 后续可按真实简历替换文字部分（简介 / 技能 / 经历 / 联系方式）
// ============================================================

export const PROFILE = {
  name: '何青松',
  nameEn: 'Hanun',
  role: '三维设计师 / 3D Designer',
  roleEn: '3D Artist',
  location: '中国 · 上海',
  avatar: '/assets/profile/avatar.jpg',
  intro: [
    '我是一名三维设计师，专注于汽车视觉、产品渲染方向。',
    '过去几年持续在整车、内饰、机械结构与数字人流程之间寻找自己的表达方式，兼顾商业精度与美学调性。'
  ],
  stats: [
    { value: '8+', label: '行业经验 (年)' },
    { value: '60+', label: '渲染作品' },
    { value: '8', label: '汽车品牌项目' }
  ],
  skills: [
    { group: '汽车可视化', items: ['C4D', 'Maya', 'Blender', 'VRED', 'Unreal Engine'] },
    { group: '渲染与材质', items: ['V-Ray', 'Octane', 'Redshift', 'Arnold'] },
    { group: '其它三维软件', items: ['Substance Designer', 'Substance Painter', 'Marvelous Designer'] },
    { group: '后期 / 合成', items: ['Nuke', 'After Effects', 'Premiere', 'Photoshop'] }
  ],
  experience: [
    { year: '2025 — 至今', role: '三维设计师', org: 'capsuletech', desc: '参与多个主机厂的外饰/内饰/结构可视化项目，熟悉产品级材质、灯光与合成流程。' },
    { year: '2021 — 2025', role: '三维设计师', org: '上海迪思市场策划', desc: '交付多个主机厂的外饰/内饰/结构可视化项目，熟悉产品级材质、灯光与合成流程。' },
  ]
}

export const CONTACTS = [
  { label: 'Email', value: 'qingsongpy@live.com', href: 'mailto:qingsongpy@live.com' },
  { label: 'WeChat', value: 'farmlapi', href: null },
  { label: 'B站', value: '多了个百宝箱', href: 'https://space.bilibili.com/94265710?spm_id_from=333.1007.0.0' },
]
