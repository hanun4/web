// ============================================================
// 占位图工具
// 依据 Image Guidelines 使用统一文生图接口生成预览图
// 用户后续可把真实素材放入 public/assets/works 后，
// 直接修改 src/data/works.js 里的 thumb 字段为本地路径即可。
// ============================================================

const ENDPOINT = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'

/**
 * 生成占位图 URL
 * @param {string} prompt SDXL 风格的具体视觉描述
 * @param {string} size landscape_16_9 | portrait_4_3 | square | portrait_16_9 | landscape_4_3 | square_hd
 */
export function thumb(prompt, size = 'landscape_16_9') {
  return `${ENDPOINT}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`
}
