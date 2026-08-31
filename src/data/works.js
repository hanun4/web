// ============================================================
// 作品数据（使用从 E:\BaiduSyncdisk\作品集\_已整理素材\ 挑选并复制到 public/assets/works 的真实图）
// 替换建议：新增作品时把图放入 public/assets/works/，再在数组末尾追加对象即可
// height 字段：Masonry 瀑布流布局用，按图片显示高度*2 估值（3列宽≈540px）
// ============================================================

export const CATEGORIES = [
  { key: 'all',       label: '全部' },
  { key: 'videos',      label: '视频' },
  { key: 'pictures',       label: '单帧' },
  { key: 'tech',        label: '技术' }
]

export const WORKS = [
  // —— 01 首屏大图（奔驰，8000×4500 渲染，16:9）
  {
    id: 'w01',
    index: '01',
    title: '奔驰 · 整车视觉',
    titleEn: 'Mercedes-Benz · Car Visualization',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2025',
    role: '材质 / 渲染',
    summary: '临摹作品，整车产品级视觉表现，车身漆面与环境反射精细把控。',
    cover: '/assets/works/01-benz-carviz.jpg',
    height: 608
  },
  // —— 02 宝骏（16:9）
  {
    id: 'w02',
    index: '02',
    title: '宝骏 · 汽车产品渲染',
    titleEn: 'BAOJUN · Automotive Render',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2025',
    role: '渲染 / 合成',
    summary: '重点呈现底盘金属质感与光影节奏。',
    cover: '/assets/works/02-baojun-carviz.jpg',
    height: 608
  },
  // —— 03 特斯拉（16:9）
  {
    id: 'w03',
    index: '03',
    title: '特斯拉 · 外饰视觉',
    titleEn: 'Tesla · Exterior Visual',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '灯光 / 渲染',
    summary: '临摹作品，整车产品级视觉表现，车身漆面与环境反射精细把控。',
    cover: '/assets/works/07-tesla-carviz.jpg',
    height: 608
  },
  // —— 04 底盘（4:3）
  {
    id: 'w04',
    index: '04',
    title: '汽车底盘 · 结构可视化',
    titleEn: 'Vehicle Chassis · Structural Visualization',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '建模 / 渲染',
    summary: '底盘结构可视化项目，对机械部件进行分层渲染，突出材质与结构关系，服务技术宣讲与产品手册。',
    cover: '/assets/works/03-chassis-visual.jpg',
    height: 810
  },
  // —— 05 内饰（4:3）
  {
    id: 'w05',
    index: '05',
    title: '汽车内饰 · 氛围渲染',
    titleEn: 'Automotive Interior · Atmosphere',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '材质 / 灯光 / 渲染',
    summary: '内饰氛围灯光与材质系统，皮革与金属饰条的质感对照，兼顾用户体验与商业展示需求。',
    cover: '/assets/works/04-interior-render.jpg',
    height: 810
  },
  // —— 06 发动机（4:3）
  {
    id: 'w06',
    index: '06',
    title: '华为手机',
    titleEn: 'HuaWei · Phone',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2023',
    role: '渲染',
    summary: '华为手机物料。',
    cover: '/assets/works/09-huawei-Phone.jpg',
    height: 810
  },
  // —— 07 三维角色（竖 3:4）
  {
    id: 'w07',
    index: '07',
    title: '电池',
    titleEn: 'Battery',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2025',
    role: '雕刻 / 贴图 / 毛发',
    summary: '电池物料。',
    cover: '/assets/works/05-character-portrait.jpg',
    height: 1440
  },
  // —— 08 场景概念（16:9）
  {
    id: 'w08',
    index: '08',
    title: '保时捷 · 整车视觉',
    titleEn: 'Porsche · Car Visualization',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2025',
    role: '场景 / 灯光',
    summary: '练习作品。',
    cover: '/assets/works/06-scene-concept.jpg',
    height: 608
  },
  // —— 09 AI 影视概念（16:9）
  {
    id: 'w09',
    index: '09',
    title: '整车视觉',
    titleEn: 'Car Visualization',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2025',
    role: '美术 / 三维资产',
    summary: '练习作品。',
    cover: '/assets/works/08-film-concept.jpg',
    height: 608
  },
  // —— 10 保时捷竖海报 · 产品渲染（3:4 竖幅）
  {
    id: 'w10',
    index: '10',
    title: '银联 · RUARUA',
    titleEn: 'Porsche · Vertical Poster 01',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '渲染 / 排版',
    summary: '为银联制作的竖屏海报。',
    cover: '/assets/works/10-porsche-poster-01.jpg',
    height: 1440
  },
  // —— 11 保时捷竖海报 02（3:4 竖幅）
  {
    id: 'w11',
    index: '11',
    title: '奔驰',
    titleEn: 'Mercedes-Benz · Rear Vertical Poster',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '灯光 / 合成',
    summary: '练习作品。',
    cover: '/assets/works/11-porsche-poster-02.jpg',
    height: 1440
  },
  // —— 12 竖屏影视帧（9:16）
  {
    id: 'w12',
    index: '12',
    title: '领克 · 竖屏概念帧',
    titleEn: 'AI Film · Vertical Concept Frame',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2025',
    role: '美术 / 三维资产',
    summary: '为领克制作的物料。',
    cover: '/assets/works/12-vertical-frame.jpg',
    height: 1700
  },
  // —— 13 三维角色竖肖像（3:4）
  {
    id: 'w13',
    index: '13',
    title: '银联 · RUARUA',
    titleEn: 'Digital Human · Vertical Portrait',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2025',
    role: '雕刻 / 皮肤 / 毛发',
    summary: '为银联制作的竖屏海报。',
    cover: '/assets/works/13-portrait-shot.jpg',
    height: 1440
  },
  // —— 14 方幅概念图（1:1）
  {
    id: 'w14',
    index: '14',
    title: '宝骏',
    titleEn: 'Concept Scene · Square Composition',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2024',
    role: '场景 / 灯光',
    summary: '宝骏练习作品。',
    cover: '/assets/works/14-square-concept-01.jpg',
    height: 1080
  },
  // —— 15 VFX · 视觉特效概念（1:1）
  {
    id: 'w15',
    index: '15',
    title: '整车',
    titleEn: 'VFX · Particle Concept',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2025',
    role: 'Houdini / 合成',
    summary: '练习作品。',
    cover: '/assets/works/15-square-concept-02.jpg',
    height: 1080
  },
  // —— 16 三维角色 · 方幅肖像（1:1）
  {
    id: 'w16',
    index: '16',
    title: '五菱底盘渲染',
    titleEn: 'Digital Human · Half Body Portrait',
    category: 'pictures',
    categoryLabel: '渲染',
    year: '2024',
    role: '贴图 / 灯光 / 渲染',
    summary: '为五菱渲染的物料。',
    cover: '/assets/works/16-character-square.jpg',
    height: 1080
  },
  // —— 17 视频项（B 站 iframe 嵌入，16:9）
  {
    id: 'w17',
    index: '17',
    title: '动态作品',
    titleEn: 'Motion Piece',
    category: 'videos',
    categoryLabel: '动态',
    year: '2025',
    role: '导演 / 动态视觉',
    summary: 'AI 影视方向动态作品，B 站视频，可直接播放。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=117162446424713&bvid=BV1Rt8Z6PEzQ&cid=41297841770&p=1',
    cover: 'https://i2.hdslb.com/bfs/archive/2412c015346d3716fb8723394dfe9a2cb138ccf6.jpg',
    height: 608
  },
  // —— 18 视频项（B 站 iframe 嵌入，16:9）
  {
    id: 'w18',
    index: '18',
    title: 'AI 影视 · 动态作品 II',
    titleEn: 'AI Film · Motion Piece II',
    category: 'videos',
    categoryLabel: 'AI 影视',
    year: '2025',
    role: '导演 / 动态视觉',
    summary: 'AI 影视方向动态作品，B 站视频，可直接播放。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=575980207&bvid=BV1xz4y1577z&cid=1275808747&p=1',
    cover: 'https://i0.hdslb.com/bfs/archive/6aaba8496c069d6db210c4b607b5e82bb2a2f929.jpg',
    height: 608
  },
  // —— 19 视频项（B 站 iframe 嵌入，16:9）
  {
    id: 'w19',
    index: '19',
    title: 'AI 影视 · 动态作品 III',
    titleEn: 'AI Film · Motion Piece III',
    category: 'videos',
    categoryLabel: 'AI 影视',
    year: '2025',
    role: '导演 / 动态视觉',
    summary: 'AI 影视方向动态作品，B 站视频，可直接播放。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=117162463200702&bvid=BV1dx8Z6vEqN&cid=41298036375&p=1',
    cover: 'https://i2.hdslb.com/bfs/archive/ba67ac801994eeaf7d4369faf27714a810c56385.jpg',
    height: 608
  },
  // —— 20 视频项（B 站 iframe 嵌入，16:9）
  {
    id: 'w20',
    index: '20',
    title: '咖啡豆 · Houdini 制作',
    titleEn: 'Coffee Bean · Houdini Practice',
    category: 'videos',
    categoryLabel: 'AI 影视',
    year: '2021',
    role: 'Houdini / Arnold 渲染',
    summary: 'Houdini 制作，Arnold 渲染。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=716950239&bvid=BV1CX4y1c7bG&cid=377878449&p=1',
    cover: 'https://i2.hdslb.com/bfs/archive/c2516250b7058879c390973fe685d5a73a8a6bbe.jpg',
    height: 608
  },
  // —— 21 视频项（B 站 iframe 嵌入，16:9）
  {
    id: 'w21',
    index: '21',
    title: '雨中保时捷 911 · Houdini 制作',
    titleEn: 'Porsche 911 in the Rain · Houdini',
    category: 'videos',
    categoryLabel: 'AI 影视',
    year: '2021',
    role: 'Houdini / 动态视觉',
    summary: '雨中保时捷，模仿的一个视频，Houdini 制作。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=289343211&bvid=BV15f4y1671Z&cid=303914701&p=1',
    cover: 'https://i1.hdslb.com/bfs/archive/28cebc963d2b56617e7f2809c2431a65e639f796.jpg',
    height: 608
  },
  // —— 22 技术项（B 站技术演示视频，BV1CV411B73L）
  {
    id: 'w22',
    index: '22',
    title: '技术演示 · 流程解析',
    titleEn: 'Tech Demo · Process Breakdown',
    category: 'tech',
    categoryLabel: '技术演示',
    year: '2023',
    role: '技术美术 / TD',
    summary: '三维制作流程解析演示，B 站技术演示视频。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=413956566&bvid=BV1CV411B73L&cid=215871737&p=1',
    cover: 'https://i1.hdslb.com/bfs/archive/feed9ec8e2ef40c2ae04f2c44a4f3b52e42ea541.jpg',
    height: 608
  },
  // —— 23 技术项（B 站技术演示视频，BV1cf4y1R7Zr，表情控制插件）
  {
    id: 'w23',
    index: '23',
    title: '表情控制插件 · Maya 自制控制器',
    titleEn: 'Facial Rig Plugin · Maya Custom Controller',
    category: 'tech',
    categoryLabel: '技术演示',
    year: '2020',
    role: 'Maya / 插件开发',
    summary: '自制面部控制器，可配合捏脸系统。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=286268655&bvid=BV1cf4y1R7Zr&cid=210603016&p=1',
    cover: 'https://i0.hdslb.com/bfs/archive/c96cc438c03b12c87ad5b8096ab406c7f92af67d.jpg',
    height: 608
  },
  // —— 24 技术项（B 站技术演示视频，BV1GK411J7yn，maya捏脸插件）
  {
    id: 'w24',
    index: '24',
    title: 'Maya 捏脸插件 · MEL 工具',
    titleEn: 'Maya Face-Shaping Plugin · MEL Tool',
    category: 'tech',
    categoryLabel: '技术演示',
    year: '2020',
    role: 'Maya / 插件开发',
    summary: 'Maya MEL 自制捏脸插件。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=498864897&bvid=BV1GK411J7yn&cid=210628251&p=1',
    cover: 'https://i2.hdslb.com/bfs/archive/90ccb8eabef9d6bfcf572055847a882970cf4e1a.jpg',
    height: 608
  }
]
