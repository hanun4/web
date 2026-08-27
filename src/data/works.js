// ============================================================
// 作品数据（使用从 E:\BaiduSyncdisk\作品集\_已整理素材\ 挑选并复制到 public/assets/works 的真实图）
// 替换建议：新增作品时把图放入 public/assets/works/，再在数组末尾追加对象即可
// height 字段：Masonry 瀑布流布局用，按图片显示高度*2 估值（3列宽≈540px）
// ============================================================

export const CATEGORIES = [
  { key: 'all',       label: '全部' },
  { key: 'videos',      label: '视频' },
  { key: 'pictures',       label: '单帧' }
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
    role: '建模 / 材质 / 渲染',
    summary: '整车产品级视觉表现，车身漆面与环境反射精细把控，HDR 光照配合多通道分层合成，满足商业广告精度。',
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
    summary: '面向市场宣发的外饰视觉，6K 级渲染分辨率，重点呈现车身金属质感与光影节奏。',
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
    summary: '未来感外饰场景，极简环境衬托车身曲线，冷银基调下的克制反射与高光。',
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
    title: '发动机 · 技术视觉',
    titleEn: 'Engine · Technical Illustration',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2023',
    role: '建模 / 渲染',
    summary: '动力总成技术插图，配合剖面与透明图层表现内部结构，用于宣传物料与培训。',
    cover: '/assets/works/09-engine-render.jpg',
    height: 810
  },
  // —— 07 三维角色（竖 3:4）
  {
    id: 'w07',
    index: '07',
    title: '写实数字人肖像',
    titleEn: 'Photoreal Digital Human Portrait',
    category: 'pictures',
    categoryLabel: '三维角色',
    year: '2025',
    role: '雕刻 / 贴图 / 毛发',
    summary: '写实数字人角色肖像作品，从扫描数据到 ZBrush 雕刻、皮肤材质、毛发系统全流程。',
    cover: '/assets/works/05-character-portrait.jpg',
    height: 1440
  },
  // —— 08 场景概念（16:9）
  {
    id: 'w08',
    index: '08',
    title: '概念场景 · 空间视觉',
    titleEn: 'Concept Scene · Spatial Vision',
    category: 'pictures',
    categoryLabel: '场景概念',
    year: '2025',
    role: '场景 / 灯光',
    summary: '影视前置美术阶段的概念场景，用大尺寸渲染输出氛围稿，为后续镜头与资产制作定调。',
    cover: '/assets/works/06-scene-concept.jpg',
    height: 608
  },
  // —— 09 AI 影视概念（16:9）
  {
    id: 'w09',
    index: '09',
    title: 'AI 影视 · 概念帧',
    titleEn: 'AI Film · Concept Frames',
    category: 'pictures',
    categoryLabel: 'AI 影视',
    year: '2025',
    role: '美术 / 三维资产',
    summary: '以 AI 概念生成打底、三维资产为结构支撑的影视概念帧，用三维保证镜头与透视的可信度。',
    cover: '/assets/works/08-film-concept.png',
    height: 608
  },
  // —— 10 保时捷竖海报 · 产品渲染（3:4 竖幅）
  {
    id: 'w10',
    index: '10',
    title: '保时捷 · 竖幅宣传海报',
    titleEn: 'Porsche · Vertical Poster 01',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '渲染 / 排版',
    summary: '为车厂社交媒体定制的竖幅宣传品，突出车身线条与环境的戏剧化对比。',
    cover: '/assets/works/10-porsche-poster-01.jpg',
    height: 1440
  },
  // —— 11 保时捷竖海报 02（3:4 竖幅）
  {
    id: 'w11',
    index: '11',
    title: '保时捷 · 尾灯视角海报',
    titleEn: 'Porsche · Rear Vertical Poster',
    category: 'pictures',
    categoryLabel: '产品渲染',
    year: '2024',
    role: '灯光 / 合成',
    summary: '以车尾视角切入的竖幅表达，尾灯与环境反射的细节是画面重点。',
    cover: '/assets/works/11-porsche-poster-02.jpg',
    height: 1440
  },
  // —— 12 竖屏影视帧（9:16）
  {
    id: 'w12',
    index: '12',
    title: 'AI 影视 · 竖屏概念帧',
    titleEn: 'AI Film · Vertical Concept Frame',
    category: 'pictures',
    categoryLabel: 'AI 影视',
    year: '2025',
    role: '美术 / 三维资产',
    summary: '适配移动端播放的竖屏概念镜头，以人像构图强调情绪与叙事张力。',
    cover: '/assets/works/12-vertical-frame.jpg',
    height: 1700
  },
  // —— 13 三维角色竖肖像（3:4）
  {
    id: 'w13',
    index: '13',
    title: '数字人 · 竖幅肖像',
    titleEn: 'Digital Human · Vertical Portrait',
    category: 'pictures',
    categoryLabel: '三维角色',
    year: '2025',
    role: '雕刻 / 皮肤 / 毛发',
    summary: '竖幅构图的数字人肖像作品，突出表情、眼神与皮肤质感的微细节。',
    cover: '/assets/works/13-portrait-shot.jpg',
    height: 1440
  },
  // —— 14 方幅概念图（1:1）
  {
    id: 'w14',
    index: '14',
    title: '场景概念 · 方幅构图',
    titleEn: 'Concept Scene · Square Composition',
    category: 'pictures',
    categoryLabel: '场景概念',
    year: '2024',
    role: '场景 / 灯光',
    summary: '方幅构图的概念场景，强调设计元素平衡与色块节奏，适合用作宣发主视觉。',
    cover: '/assets/works/14-square-concept-01.jpg',
    height: 1080
  },
  // —— 15 VFX · 视觉特效概念（1:1）
  {
    id: 'w15',
    index: '15',
    title: '视觉特效 · 粒子概念图',
    titleEn: 'VFX · Particle Concept',
    category: 'pictures',
    categoryLabel: '视觉特效',
    year: '2025',
    role: 'Houdini / 合成',
    summary: '以粒子特效为主体的视觉实验，配合三维场景做前后期合成的预演稿。',
    cover: '/assets/works/15-square-concept-02.jpg',
    height: 1080
  },
  // —— 16 三维角色 · 方幅肖像（1:1）
  {
    id: 'w16',
    index: '16',
    title: '数字人 · 方幅半身像',
    titleEn: 'Digital Human · Half Body Portrait',
    category: 'pictures',
    categoryLabel: '三维角色',
    year: '2024',
    role: '贴图 / 灯光 / 渲染',
    summary: '中近景半身像，服装材质搭配人像打光，用于项目前期的角色风格测试。',
    cover: '/assets/works/16-character-square.jpg',
    height: 1080
  },
  // —— 17 视频项（B 站 iframe 嵌入，16:9）
  {
    id: 'w17',
    index: '17',
    title: 'AI 影视 · 动态作品',
    titleEn: 'AI Film · Motion Piece',
    category: 'videos',
    categoryLabel: 'AI 影视',
    year: '2025',
    role: '导演 / 动态视觉',
    summary: 'AI 影视方向动态作品，B 站视频，可直接播放。',
    videoSrc: 'https://player.bilibili.com/player.html?isOutside=true&aid=117162446424713&bvid=BV1Rt8Z6PEzQ&cid=41297841770&p=1',
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
    height: 608
  }
]
